import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterInfo } from '../components/CharacterInfo';

const mockCharacterData = {
  name: 'Test Hero',
  race: 'Elf',
  class: 'Wizard',
  lvl: 5,
  portraitUrl: 'https://example.com/portrait.png',
};

describe('CharacterInfo component', () => {
  it('renders character name, race, class, and level', () => {
    render(<CharacterInfo characterData={mockCharacterData as any} />);
    expect(screen.getByText('Test Hero')).toBeInTheDocument();
    expect(screen.getByText(/Elf/)).toBeInTheDocument();
    expect(screen.getByText(/Wizard/)).toBeInTheDocument();
    expect(screen.getByText(/Level 5/)).toBeInTheDocument();
  });

  it('renders character portrait if portraitUrl is provided', () => {
    render(<CharacterInfo characterData={mockCharacterData as any} />);
    const img = screen.getByAltText('Portrait of Test Hero') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(mockCharacterData.portraitUrl);
  });

  it('does not render portrait if portraitUrl is missing', () => {
    const dataWithoutPortrait = { ...mockCharacterData, portraitUrl: undefined };
    render(<CharacterInfo characterData={dataWithoutPortrait as any} />);
    expect(screen.queryByAltText('Portrait of Test Hero')).not.toBeInTheDocument();
  });
});