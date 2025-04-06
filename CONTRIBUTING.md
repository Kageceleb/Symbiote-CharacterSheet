# Contributing to Symbiote-CharacterSheet

Thank you for your interest in contributing to our Kage Symbiote character sheet for TaleSpire integration! This document provides guidelines and instructions to help you contribute effectively.

## Table of Contents
- [Development Setup](#development-setup)
- [Code Style Guidelines](#code-style-guidelines)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Kage Symbiote Character Sheet Specifics](#kage-symbiote-character-sheet-specifics)
- [Accessibility Guidelines](#accessibility-guidelines)

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Start the server:
   ```bash
   npm run start
   ```

## Code Style Guidelines

We enforce code style through ESLint and Prettier. The configuration files are included in the repository.

### Key Style Points

- Use TypeScript for type safety
- Follow React best practices and hooks rules
- Use functional components over class components
- Keep components focused and composable
- Document complex logic with comments
- Use semantic HTML elements
- Follow the established CSS naming conventions

### Installing Linting Tools

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
```

### Running Linting

```bash
# Check for linting issues
npm run lint

# Fix automatically fixable issues
npm run lint:fix
```

## Development Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Run tests and ensure linting passes
4. Create a pull request

### Branch Naming Convention

Use the following naming convention for branches:

- `feature/your-feature-name` - For new features
- `bugfix/issue-description` - For bug fixes
- `docs/what-you-changed` - For documentation changes

## Pull Request Process

1. Follow the PR template
2. Ensure your code passes all tests and linting
3. Reference any related issues
4. Request review from at least one team member
5. Address review comments
6. Squash commits when merging

## Kage Symbiote Character Sheet Specifics

### Character Data Structure

- Follow the established types in `CharacterSheetProps.ts`
- Keep data structure consistent with Kage Symbiote rules
- Use standard naming conventions for abilities, skills, and powers

### Game Mechanics

- Implement dice rolling as described in Kage Symbiote rules
- Handle modifiers and bonuses correctly
- Ensure calculation methods follow Kage Symbiote formulas

### UI Components

- Use the established styling patterns
- Keep the Kage Symbiote theme consistent
- Powers should be color-coded by type (at-will, encounter, daily, utility)
- Ensure component reusability

### TaleSpire Integration

- Follow the TaleSpire API documentation
- Test integration thoroughly
- Document any special considerations for TaleSpire

## Accessibility Guidelines

- Ensure proper contrast ratios for text
- Use semantic HTML
- Add appropriate aria-labels
- Ensure keyboard navigation works
- Make dice rolling and other interactive elements accessible

---

Thank you for contributing to the project! Your efforts help make Kage Symbiote more accessible and enjoyable through TaleSpire. 