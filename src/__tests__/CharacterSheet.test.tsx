import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterSheet } from '../components/CharacterSheet';

// Mock child components to isolate CharacterSheet tests
jest.mock('../components/AbilityScores', () => ({
  AbilityScores: () => <div data-testid="ability-scores" />,
}));
jest.mock('../components/Skills', () => ({
  Skills: () => <div data-testid="skills" />,
}));
jest.mock('../components/Powers', () => ({
  Powers: () => <div data-testid="powers" />,
}));
jest.mock('../components/FeatsAndAbilities', () => ({
  FeatsAndAbilities: () => <div data-testid="feats-and-abilities" />,
}));
jest.mock('../components/Equipments', () => ({
  Equipments: () => <div data-testid="equipments" />,
}));

const mockCharacterData = {
  name: 'Test Hero',
  race: 'Elf',
  class: 'Wizard',
  lvl: 5,
  portraitUrl: 'https://example.com/portrait.png',
  health: { currentHp: 20, maxHp: 30 },
  initiative: 2,
  defenses: { ac: 15 },
  stats: {
    strength: 10,
    dexterity: 14,
    constitution: 12,
    intelligence: 16,
    wisdom: 8,
    charisma: 13,
  },
  proficiencyBonus: 3,
  skills: [],
  conditions: [],
  // Add any other fields your component expects
};

describe('CharacterSheet component', () => {
  it('renders character portrait if portraitUrl is provided', () => {
    render(<CharacterSheet characterData={mockCharacterData as any} />);
    expect(screen.getByAltText('Portrait of Test Hero')).toBeInTheDocument();
  });

  it('renders character header with level, race, and class', () => {
    render(<CharacterSheet characterData={mockCharacterData as any} />);
    expect(screen.getByText(/Level 5 Elf Wizard/)).toBeInTheDocument();
  });

  it('renders combat stats section', () => {
    render(<CharacterSheet characterData={mockCharacterData as any} />);
    expect(screen.getByText(/HP:/)).toBeInTheDocument();
    expect(screen.getByText(/Initiative:/)).toBeInTheDocument();
    expect(screen.getByText(/AC:/)).toBeInTheDocument();
  });

  it('renders all main child components', () => {
    render(<CharacterSheet characterData={mockCharacterData as any} />);
    expect(screen.getByTestId('ability-scores')).toBeInTheDocument();
    expect(screen.getByTestId('skills')).toBeInTheDocument();
    expect(screen.getByTestId('powers')).toBeInTheDocument();
    expect(screen.getByTestId('feats-and-abilities')).toBeInTheDocument();
    expect(screen.getByTestId('equipments')).toBeInTheDocument();
  });
});