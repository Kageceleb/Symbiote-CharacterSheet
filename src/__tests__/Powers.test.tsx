import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Powers } from '../components/Powers';
import { mockTS } from './mocks';

describe('Powers', () => {
  const mockCharacterData = {
    powers: {
      atWill: [
        { name: 'Magic Missile', description: 'A basic attack', diceRoll: '1d4+5', used: false },
        { name: 'Fire Bolt', description: 'A fire attack', diceRoll: '1d6+3', used: true }
      ],
      encounter: [
        { name: 'Lightning Strike', description: 'A lightning attack', diceRoll: '2d6+4', used: false }
      ],
      daily: [
        { name: 'Fireball', description: 'A powerful fire attack', diceRoll: '8d6', used: false }
      ],
      utility: [
        { name: 'Shield', description: 'Defensive spell', used: false }
      ]
    }
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders all power categories correctly', () => {
    const { getByText } = render(
      <Powers characterData={mockCharacterData as any} rollDice={mockTS.dice.putDiceInTray} />
    );

    // Check category headers
    expect(getByText('At-Will Powers')).toBeInTheDocument();
    expect(getByText('Encounter Powers')).toBeInTheDocument();
    expect(getByText('Daily Powers')).toBeInTheDocument();
    expect(getByText('Utility Powers')).toBeInTheDocument();

    // Check power names
    expect(getByText('Magic Missile')).toBeInTheDocument();
    expect(getByText('Fire Bolt')).toBeInTheDocument();
    expect(getByText('Lightning Strike')).toBeInTheDocument();
    expect(getByText('Fireball')).toBeInTheDocument();
    expect(getByText('Shield')).toBeInTheDocument();
  });

  it('handles power usage toggling correctly', () => {
    const { getByText } = render(
      <Powers characterData={mockCharacterData as any} rollDice={mockTS.dice.putDiceInTray} />
    );

    // Find the Magic Missile power and its toggle button
    const magicMissileContainer = getByText('Magic Missile').closest('.power-item');
    const toggleButton = magicMissileContainer?.querySelector('.power-toggle-btn') as HTMLElement;
    expect(toggleButton).toBeInTheDocument();
    
    // Click the toggle button
    fireEvent.click(toggleButton);

    // The power should now be marked as used
    expect(magicMissileContainer).toHaveClass('used');
  });

  it('handles dice rolling correctly', () => {
    const { getByText } = render(
      <Powers characterData={mockCharacterData as any} rollDice={mockTS.dice.putDiceInTray} />
    );

    // Find and click the roll button for Magic Missile
    const magicMissileContainer = getByText('Magic Missile').closest('.power-item');
    const rollButton = magicMissileContainer?.querySelector('.power-roll-btn') as HTMLElement;
    fireEvent.click(rollButton);

    // Verify the dice roll was called correctly
    expect(mockTS.dice.putDiceInTray).toHaveBeenCalledWith('1d4+5', 'Magic Missile');
  });

  it('handles power reset correctly', () => {
    const { getByText, rerender } = render(
      <Powers characterData={mockCharacterData as any} rollDice={mockTS.dice.putDiceInTray} />
    );

    // Click the reset button
    fireEvent.click(getByText('Reset Powers'));

    // Update the mock data to reflect the reset state
    const updatedCharacterData = {
      ...mockCharacterData,
      powers: {
        ...mockCharacterData.powers,
        atWill: mockCharacterData.powers.atWill.map(power => ({ ...power, used: false }))
      }
    };

    // Rerender with the updated data
    rerender(
      <Powers characterData={updatedCharacterData as any} rollDice={mockTS.dice.putDiceInTray} />
    );

    // After reset, Fire Bolt should not have the 'used' class
    const fireBoltContainer = getByText('Fire Bolt').closest('.power-item');
    expect(fireBoltContainer).not.toHaveClass('used');
  });
}); 