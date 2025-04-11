import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Skills } from '../components/Skills';
import { mockTS } from './mocks';

describe('Skills', () => {
  const mockCharacterData = {
    stats: {
      strength: 16,
      dexterity: 14,
      constitution: 12,
      intelligence: 10,
      wisdom: 8,
      charisma: 15
    },
    skills: {
      acrobatics: true,
      animalHandling: false,
      arcana: false,
      athletics: true,
      deception: true,
      history: false,
      insight: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: true,
      performance: false,
      persuasion: false,
      religion: false,
      stealth: true,
      survival: false,
      sleightOfHand: true
    },
    proficiencyBonus: 3
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders all skills correctly', () => {
    render(<Skills characterData={mockCharacterData as any} />);

    // Check if skill names are rendered
    expect(screen.getByText('Acrobatics (DEX):')).toBeInTheDocument();
    expect(screen.getByText('Animal Handling (WIS):')).toBeInTheDocument();
    expect(screen.getByText('Arcana (INT):')).toBeInTheDocument();
    expect(screen.getByText('Athletics (STR):')).toBeInTheDocument();
  });

  it('displays correct skill modifiers for proficient skills', () => {
    render(<Skills characterData={mockCharacterData as any} />);

    // Check if proficient skill modifiers are correct
    // Acrobatics: DEX 14 = +2, +3 proficiency = +5
    expect(screen.getByTestId('acrobatics-modifier')).toHaveTextContent('+5');
    
    // Athletics: STR 16 = +3, +3 proficiency = +6
    expect(screen.getByTestId('athletics-modifier')).toHaveTextContent('+6');
  });

  it('displays correct skill modifiers for non-proficient skills', () => {
    render(<Skills characterData={mockCharacterData as any} />);

    // Check if non-proficient skill modifiers are correct
    // Animal Handling: WIS 8 = -1, no proficiency
    expect(screen.getByTestId('animal-handling-modifier')).toHaveTextContent('-1');
    
    // Arcana: INT 10 = +0, no proficiency
    expect(screen.getByTestId('arcana-modifier')).toHaveTextContent('+0');
  });

  it('calls TS.dice.putDiceInTray with correct parameters when clicking on skill modifiers', () => {
    render(<Skills characterData={mockCharacterData as any} />);

    // Click on Acrobatics modifier
    fireEvent.click(screen.getByTestId('acrobatics-modifier'));
    expect(mockTS.dice.putDiceInTray).toHaveBeenCalledWith(
      [{ name: 'Acrobatics Check', roll: '1d20+5' }],
      false
    );

    // Click on Athletics modifier
    fireEvent.click(screen.getByTestId('athletics-modifier'));
    expect(mockTS.dice.putDiceInTray).toHaveBeenCalledWith(
      [{ name: 'Athletics Check', roll: '1d20+6' }],
      false
    );

    // Click on Animal Handling modifier
    fireEvent.click(screen.getByTestId('animal-handling-modifier'));
    expect(mockTS.dice.putDiceInTray).toHaveBeenCalledWith(
      [{ name: 'Animal Handling Check', roll: '1d20-1' }],
      false
    );
  });

  it('formats modifiers correctly (positive and negative)', () => {
    render(<Skills characterData={mockCharacterData as any} />);

    // Check positive modifier formatting
    expect(screen.getByTestId('acrobatics-modifier')).toHaveTextContent('+5');
    
    // Check negative modifier formatting
    expect(screen.getByTestId('animal-handling-modifier')).toHaveTextContent('-1');
    
    // Check zero modifier formatting
    expect(screen.getByTestId('arcana-modifier')).toHaveTextContent('+0');
  });
}); 