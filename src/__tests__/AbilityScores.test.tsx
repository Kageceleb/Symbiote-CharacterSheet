import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AbilityScores } from '../components/AbilityScores';
import { mockTS } from './mocks';

describe('AbilityScores', () => {
  const mockCharacterData = {
    stats: {
      strength: 16,
      dexterity: 14,
      constitution: 12,
      intelligence: 10,
      wisdom: 8,
      charisma: 15
    }
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders all ability scores correctly', () => {
    const { getByText } = render(
      <AbilityScores characterData={mockCharacterData as any} rollDice={mockTS.dice.putDiceInTray} />
    );

    // Check STR
    const strContainer = getByText('STR').closest('.ability');
    expect(strContainer).toBeInTheDocument();
    expect(getByText('16')).toBeInTheDocument();
    expect(strContainer?.querySelector('.ability-mod')).toHaveTextContent('+3');

    // Check DEX
    const dexContainer = getByText('DEX').closest('.ability');
    expect(dexContainer).toBeInTheDocument();
    expect(getByText('14')).toBeInTheDocument();
    expect(dexContainer?.querySelector('.ability-mod')).toHaveTextContent('+2');

    // Check CON
    const conContainer = getByText('CON').closest('.ability');
    expect(conContainer).toBeInTheDocument();
    expect(getByText('12')).toBeInTheDocument();
    expect(conContainer?.querySelector('.ability-mod')).toHaveTextContent('+1');

    // Check INT
    const intContainer = getByText('INT').closest('.ability');
    expect(intContainer).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(intContainer?.querySelector('.ability-mod')).toHaveTextContent('+0');

    // Check WIS
    const wisContainer = getByText('WIS').closest('.ability');
    expect(wisContainer).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
    expect(wisContainer?.querySelector('.ability-mod')).toHaveTextContent('-1');

    // Check CHA
    const chaContainer = getByText('CHA').closest('.ability');
    expect(chaContainer).toBeInTheDocument();
    expect(getByText('15')).toBeInTheDocument();
    expect(chaContainer?.querySelector('.ability-mod')).toHaveTextContent('+2');
  });

  it('calls rollDice with correct parameters when clicking on modifiers', () => {
    const { getByText } = render(
      <AbilityScores characterData={mockCharacterData as any} rollDice={mockTS.dice.putDiceInTray} />
    );

    // Click on STR modifier and check if rollDice was called with correct parameters
    const strContainer = getByText('STR').closest('.ability');
    const strModifier = strContainer?.querySelector('.ability-mod') as HTMLElement;
    fireEvent.click(strModifier);
    expect(mockTS.dice.putDiceInTray).toHaveBeenCalledWith('1d20+3', 'Strength Check');
  });
}); 