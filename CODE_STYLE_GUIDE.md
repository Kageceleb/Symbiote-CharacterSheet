# Code Style Guide for Symbiote-CharacterSheet

This document outlines the specific coding conventions and patterns to follow when contributing to the Symbiote-CharacterSheet project for Kage Symbiote.

## General Principles

- **Readability** over cleverness
- **Consistency** with existing patterns
- **Type safety** using TypeScript
- **Maintainability** through modular design

## JavaScript/TypeScript Conventions

### Naming

- **Variables and functions**: camelCase
- **Components**: PascalCase
- **Interfaces and Types**: PascalCase, prefixed with 'I' for interfaces (e.g., `ICharacterProps`)
- **Constants**: UPPER_SNAKE_CASE for truly constant values
- **Files**: Use kebab-case for file names (e.g., `character-sheet.tsx`)

### TypeScript Usage

- Always define types for props, state, and function parameters
- Use interfaces for object shapes that represent entities (like Character)
- Use type aliases for simpler types like unions
- Avoid using `any` - use `unknown` if type is truly unknown
- Use meaningful type names that describe the data

```typescript
// Good
interface CharacterStats {
  strength: number;
  dexterity: number;
  // ...other stats
}

// Avoid
interface Stats {
  str: number;
  dex: number;
  // ...other stats
}
```

### Functions

- Prefer arrow functions for consistency
- Keep functions small and focused on a single responsibility
- Use meaningful function names that describe the action being performed
- Document complex functions with JSDoc comments

```typescript
// Good
const calculateAbilityModifier = (abilityScore: number): number => {
  return Math.floor((abilityScore - 10) / 2);
};

// Avoid
const calc = (score: number): number => {
  return Math.floor((score - 10) / 2);
};
```

## React Specific Guidelines

### Components

- Use functional components with hooks
- Keep components focused and not too large
- Split complex components into smaller, reusable components
- Use prop destructuring for readability

```typescript
// Good
const AbilityScore: React.FC<AbilityScoreProps> = ({ name, score, modifier, onRoll }) => {
  return (
    <div className="ability">
      <h3>{name}</h3>
      <p className="ability-score">{score}</p>
      <p className="ability-mod" onClick={() => onRoll(name, modifier)}>
        {formatModifier(modifier)}
      </p>
    </div>
  );
};

// Avoid
const AbilityScore = (props) => {
  return (
    <div className="ability">
      <h3>{props.name}</h3>
      <p className="ability-score">{props.score}</p>
      <p className="ability-mod" onClick={() => props.onRoll(props.name, props.modifier)}>
        {formatModifier(props.modifier)}
      </p>
    </div>
  );
};
```

### State Management

- Use local component state for UI-specific state
- Group related state variables using `useState` with objects
- Use derived state when possible instead of duplicate state
- Consider custom hooks for complex state logic

```typescript
// Good
const [diceRollResult, setDiceRollResult] = useState<DiceRollResult | null>(null);

// Instead of separate states
const [diceTotal, setDiceTotal] = useState(0);
const [diceValues, setDiceValues] = useState<number[]>([]);
const [diceFormula, setDiceFormula] = useState('');
```

### Event Handlers

- Name event handlers with 'handle' prefix
- For props that are event handlers, use 'on' prefix
- Keep event handlers focused on a single task

```typescript
// Component receiving the prop
const AbilityScore = ({ name, score, onRoll }) => {
  return <div onClick={() => onRoll(name)}>{name}</div>;
};

// Parent component
const CharacterSheet = () => {
  const handleAbilityRoll = (abilityName: string) => {
    // Roll logic here
  };
  
  return <AbilityScore name="Strength" score={16} onRoll={handleAbilityRoll} />;
};
```

## CSS Conventions

### Class Naming

- Use kebab-case for CSS class names
- Follow a component-element pattern: `component-element-modifier`
- Use meaningful, descriptive names

```css
/* Good */
.power-item-daily
.ability-mod-strength

/* Avoid */
.powerItemDaily
.abilMod
```

### Organization

- Group related styles together
- Order properties consistently (positioning, layout, dimensions, typography, visual)
- Use variables for repeated values like colors and spacing

```css
.character-sheet {
  /* Positioning */
  position: relative;
  z-index: 1;
  
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Dimensions */
  width: 100%;
  max-width: 850px;
  
  /* Typography */
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  color: #331800;
  
  /* Visual */
  background-color: #f4e9d2;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
```

## Kage Symbiote Specific Guidelines

### Character Data

- Follow Kage Symbiote terminology and naming conventions
- Use the established data structure in CharacterSheetProps.ts
- Document game mechanics that might not be obvious

### Dice Rolling

- Follow standard dice notation (e.g., "2d6+3")
- Ensure dice functions handle all the cases required for Kage Symbiote
- Roll results should show individual dice values plus modifiers

### Powers and Abilities

- Categorize powers correctly (at-will, encounter, daily, utility)
- Implement proper tracking for power usage
- Include all relevant power details (range, damage, effects)

## Documentation

- Document complex game mechanics
- Include comments explaining Kage Symbiote-specific calculations
- Add JSDoc comments for functions that implement game rules

```typescript
/**
 * Calculates the ability modifier based on the ability score.
 * In Kage Symbiote, modifiers are (score - 10) / 2, rounded down.
 */
const getAbilityModifier = (abilityScore: number): number => {
  return Math.floor((abilityScore - 10) / 2);
};
```

## Commit Messages

- Use conventional commit format: `type(scope): message`
- Types: feat, fix, docs, style, refactor, test, chore
- Scope: component or feature area (e.g., character-sheet, dice-roller)
- Keep messages concise and descriptive

Examples:
- `feat(powers): add power usage tracking`
- `fix(dice): correct modifier calculation in dice roller`
- `style(ui): improve condition display styling`

---

This style guide is a living document and may be updated as the project evolves. Always follow the existing patterns in the codebase even if they're not explicitly covered here. 