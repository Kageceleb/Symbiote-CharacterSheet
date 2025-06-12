import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharacterSheet } from '../components/CharacterSheet';
import { mockTS } from './mocks';

// Mock Math.random to return predictable values for dice rolls
const mockRandom = jest.spyOn(Math, 'random');
mockRandom.mockReturnValue(0.5);

describe('CharacterSheet', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders character basic information', () => {
    render(<CharacterSheet characterData={mockTS} />);
    
    // Check if character name is displayed
    expect(screen.getByText('Alnuhazux')).toBeInTheDocument();
    
    // Check if class and race are displayed
    expect(screen.getByText(/Level 8/)).toBeInTheDocument();
    expect(screen.getByText(/Tiefling/)).toBeInTheDocument();
    expect(screen.getByText(/Rogue/)).toBeInTheDocument();
    
  });

  it('renders character portrait when portraitUrl is provided', () => {
    render(<CharacterSheet characterData={mockTS} />);

    const portrait = screen.getByAltText(`Portrait of Alnuhazux`);
    expect(portrait).toBeInTheDocument();
    expect(portrait).toHaveAttribute('src', mockTS.portraitUrl);
  });

  it('renders health information correctly', () => {
    render(<CharacterSheet characterData={mockTS} />);

    // Expand the combat stats section if it's not expanded by default
    const combatStatsSection = screen.getByText('Combat Stats');
    fireEvent.click(combatStatsSection);

    // Check health values
    expect(screen.getByText(/HP: 64\/64/)).toBeInTheDocument();
    expect(screen.getByText(/Bloodied: 32/)).toBeInTheDocument();
    expect(screen.getByText(/Temp HP: 0/)).toBeInTheDocument();
  });

  it('renders ability scores correctly', () => {
    render(<CharacterSheet characterData={mockTS} />);

    // Expand the ability scores section if it's not expanded by default
    const abilityScoresSection = screen.getByText('Ability Scores');
    fireEvent.click(abilityScoresSection);

    // Check ability scores
    expect(screen.getByText('STR')).toBeInTheDocument();
    expect(screen.getByText('DEX')).toBeInTheDocument();
    expect(screen.getByText('CON')).toBeInTheDocument();
    expect(screen.getByText('INT')).toBeInTheDocument();
    expect(screen.getByText('WIS')).toBeInTheDocument();
    expect(screen.getByText('CHA')).toBeInTheDocument();
  });

  it('renders skills correctly', () => {
    render(<CharacterSheet characterData={mockTS} />);

    // Expand skills section
    const skillsSection = screen.getByText('Skills');
    fireEvent.click(skillsSection);

    // Check if skills are displayed
    expect(screen.getByText(/Athletics \(STR\):/)).toBeInTheDocument();
    expect(screen.getByText(/Acrobatics \(DEX\):/)).toBeInTheDocument();
    expect(screen.getByText(/Arcana \(INT\):/)).toBeInTheDocument();
  });

  it('renders equipment section correctly', () => {
    render(<CharacterSheet characterData={mockTS} />);

    // Expand the equipment section
    const equipmentSection = screen.getByText('Equipment');
    fireEvent.click(equipmentSection);

    // Check weapons section
    expect(screen.getByText('Weapons')).toBeInTheDocument();
    
    // Check armor section
    expect(screen.getByText('Armor')).toBeInTheDocument();
    
    // Check gear section
    expect(screen.getByText('Gear')).toBeInTheDocument();
    
    // Check magic items section
    expect(screen.getByText('Magic Items')).toBeInTheDocument();
    
    // Check wealth section
    expect(screen.getByText('Wealth')).toBeInTheDocument();
  });

  it('renders feats and abilities section correctly', () => {
    render(<CharacterSheet characterData={mockTS} />);

    // Expand feats and abilities section
    const featsSection = screen.getByText('Feats & Abilities');
    fireEvent.click(featsSection);

    // Check feats section
    expect(screen.getByText('Feats')).toBeInTheDocument();
    
    // Check languages section
    expect(screen.getByText('Languages')).toBeInTheDocument();
    
    // Check resistances section
    expect(screen.getByText('Resistances & Immunities')).toBeInTheDocument();
    
    // Check notes section
    expect(screen.getByText('Character Notes')).toBeInTheDocument();
  });

  it('renders powers section correctly', () => {
    render(<CharacterSheet characterData={mockTS} />);

    // Expand powers section
    const powersSection = screen.getByText('Powers');
    fireEvent.click(powersSection);

    // Check power categories
    expect(screen.getByText('At-Will Powers')).toBeInTheDocument();
    expect(screen.getByText('Encounter Powers')).toBeInTheDocument();
    expect(screen.getByText('Daily Powers')).toBeInTheDocument();
    expect(screen.getByText('Utility Powers')).toBeInTheDocument();
  });

  it('handles dice rolls correctly', () => {
    render(<CharacterSheet characterData={mockTS} />);
    
    // Expand ability scores section
    const abilityScoresSection = screen.getByText('Ability Scores');
    fireEvent.click(abilityScoresSection);
    
    // Find and click on the strength modifier using the ability container
    const strContainer = screen.getByText('STR').closest('.ability');
    const strModifier = strContainer?.querySelector('.ability-mod') as HTMLElement;
    fireEvent.click(strModifier);
    
    // Verify TS.dice.putDiceInTray was called with correct parameters
    expect(mockTS.dice.putDiceInTray).toHaveBeenCalledWith([{ name: 'Strength Check', roll: '1d20+3' }], false);
  });

  it('handles power usage toggling correctly', () => {
    render(<CharacterSheet characterData={mockTS} />);
    
    // Expand powers section
    const powersSection = screen.getByText('Powers');
    fireEvent.click(powersSection);
    
    // Find an encounter power
    const trickStrikePower = screen.getByText('Trick Strike').closest('.power-item');
    expect(trickStrikePower).toBeInTheDocument();
    
    // Find and click the toggle button
    const toggleButton = trickStrikePower?.querySelector('.power-toggle-btn');
    expect(toggleButton).toBeInTheDocument();
    fireEvent.click(toggleButton as HTMLElement);
    
    // Verify the power is now marked as used
    expect(trickStrikePower).toHaveClass('used');
  });
}); 