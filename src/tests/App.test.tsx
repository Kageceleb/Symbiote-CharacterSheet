import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock the player data to avoid loading the JSON file
jest.mock('../../players.json', () => [
  {
    name: 'Test Character',
    class: 'Fighter',
    race: 'Human',
    lvl: 1,
    stats: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    }
    // Add other required properties as needed
  }
]);

// Mock the CharacterSheet component to avoid errors
jest.mock('../components/CharacterSheet', () => {
  return {
    __esModule: true,
    CharacterSheet: () => <div data-testid="character-sheet">Mocked Character Sheet</div>
  };
});

describe('App Component', () => {
  test('renders session content heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Here comes the content of the current session/i);
    expect(headingElement).toBeInTheDocument();
  });
  
  test('renders character sheet', () => {
    render(<App />);
    const characterElement = screen.getByTestId('character-sheet');
    expect(characterElement).toBeInTheDocument();
    expect(characterElement).toHaveTextContent('Mocked Character Sheet');
  });
}); 