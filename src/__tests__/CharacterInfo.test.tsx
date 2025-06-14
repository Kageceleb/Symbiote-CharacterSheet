import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterInfo } from '../components/CharacterInfo';
import { mockTS } from './mocks';

describe('CharacterInfo', () => {
  const mockCharacterData = {
    characterData: {
      ...mockTS,
      // Override specific properties for testing
      name: 'Alnuhazux',
      lvl: 8,
      class: 'Rogue',
      race: 'Tiefling',
      xp: 34000,
      portraitUrl: '/path/to/portrait.jpg'
    }
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders basic character information correctly', () => {
    render(<CharacterInfo characterData={mockCharacterData} />);

    // Check if basic character info is rendered
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Alnuhazux')).toBeInTheDocument();
    
    expect(screen.getByText('Level:')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    
    expect(screen.getByText('Class:')).toBeInTheDocument();
    expect(screen.getByText('Rogue')).toBeInTheDocument();
    
    expect(screen.getByText('Race:')).toBeInTheDocument();
    expect(screen.getByText('Tiefling')).toBeInTheDocument();
    
  });

  it('renders portrait when portraitUrl is provided', () => {
    render(<CharacterInfo characterData={mockCharacterData} />);

    // Check if portrait is rendered
    const portrait = screen.getByAltText("Alnuhazux's portrait");
    expect(portrait).toBeInTheDocument();
    expect(portrait).toHaveAttribute('src', '/path/to/portrait.jpg');
  });

  it('does not render portrait when portraitUrl is not provided', () => {
    const characterWithoutPortrait = {
      characterData: {
        ...mockTS,
        portraitUrl: undefined
      }
    };
    
    render(<CharacterInfo characterData={characterWithoutPortrait} />);

    // Check that portrait is not rendered
    expect(screen.queryByAltText("Alnuhazux's portrait")).not.toBeInTheDocument();
  });
}); 