import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Equipments } from '../components/Equipments';
import { mockTS } from './mocks';

describe('Equipments', () => {
  const mockCharacterData = {
    equipment: {
      weapons: [
        {
          name: 'Longsword',
          attackModifier: 8,
          damageFormula: '1d8',
          damageModifier: 3,
          properties: ['Versatile']
        },
        {
          name: 'Dagger',
          attackModifier: 8,
          damageFormula: '1d4',
          damageModifier: 3,
          properties: ['Off-hand', 'Light', 'Thrown']
        }
      ],
      armor: 'Chain Mail',
      gear: ['Backpack', 'Bedroll', 'Rope (50 ft)', 'Torch (5)'],
      magicItems: ['Amulet of Health +1', 'Ring of Protection +1']
    },
    wealth: {
      gold: 50,
      silver: 30,
      copper: 15
    }
  };

  const mockHandleWeaponAttackRoll = jest.fn();
  const mockRollDice = jest.fn();

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders weapons correctly', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Check if weapons are rendered
    expect(screen.getByText('Longsword')).toBeInTheDocument();
    expect(screen.getByText('Dagger')).toBeInTheDocument();
    
    // Check if weapon properties are rendered
    expect(screen.getByText('Versatile')).toBeInTheDocument();
    expect(screen.getByText('Off-hand, Light, Thrown')).toBeInTheDocument();
  });

  it('renders armor correctly', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Check if armor is rendered
    expect(screen.getByText('Chain Mail')).toBeInTheDocument();
  });

  it('renders gear correctly', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Check if gear items are rendered
    expect(screen.getByText('Backpack')).toBeInTheDocument();
    expect(screen.getByText('Bedroll')).toBeInTheDocument();
    expect(screen.getByText('Rope (50 ft)')).toBeInTheDocument();
    expect(screen.getByText('Torch (5)')).toBeInTheDocument();
  });

  it('renders magic items correctly', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Check if magic items are rendered
    expect(screen.getByText('Amulet of Health +1')).toBeInTheDocument();
    expect(screen.getByText('Ring of Protection +1')).toBeInTheDocument();
  });

  it('renders wealth correctly', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Check if wealth is rendered
    expect(screen.getByText('Gold: 50')).toBeInTheDocument();
    expect(screen.getByText('Silver: 30')).toBeInTheDocument();
    expect(screen.getByText('Copper: 15')).toBeInTheDocument();
  });

  it('calls handleWeaponAttackRoll with correct parameters when attack button is clicked', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Click on the attack button for Longsword
    const attackButtons = screen.getAllByText('Attack (+8)');
    fireEvent.click(attackButtons[0]);

    // Check if handleWeaponAttackRoll was called with correct parameters
    expect(mockHandleWeaponAttackRoll).toHaveBeenCalledWith(
      mockCharacterData.equipment.weapons[0],
      'normal'
    );
  });

  it('calls handleWeaponAttackRoll with advantage when advantage button is clicked', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Click on the advantage button for Longsword
    const advantageButtons = screen.getAllByText('Adv');
    fireEvent.click(advantageButtons[0]);

    // Check if handleWeaponAttackRoll was called with correct parameters
    expect(mockHandleWeaponAttackRoll).toHaveBeenCalledWith(
      mockCharacterData.equipment.weapons[0],
      'advantage'
    );
  });

  it('calls handleWeaponAttackRoll with disadvantage when disadvantage button is clicked', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Click on the disadvantage button for Longsword
    const disadvantageButtons = screen.getAllByText('Dis');
    fireEvent.click(disadvantageButtons[0]);

    // Check if handleWeaponAttackRoll was called with correct parameters
    expect(mockHandleWeaponAttackRoll).toHaveBeenCalledWith(
      mockCharacterData.equipment.weapons[0],
      'disadvantage'
    );
  });

  it('calls rollDice with correct parameters when damage button is clicked', () => {
    render(
      <Equipments 
        characterData={mockCharacterData as any} 
        handleWeaponAttackRoll={mockHandleWeaponAttackRoll}
        rollDice={mockRollDice}
      />
    );

    // Click on the damage button for Longsword
    const damageButtons = screen.getAllByText('Damage');
    fireEvent.click(damageButtons[0]);

    // Check if rollDice was called with correct parameters
    expect(mockRollDice).toHaveBeenCalledWith(
      '1d8+3',
      'Longsword Damage'
    );
  });
}); 