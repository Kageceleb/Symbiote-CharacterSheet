import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { mockTS } from './mocks';

// Mock the CharacterSheet component to avoid errors
jest.mock('../components/CharacterSheet', () => {
  return {
    __esModule: true,
    CharacterSheet: () => <div data-testid="character-sheet">Mocked Character Sheet</div>
  };
});

describe('App Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders session content heading', () => {
    render(<App />);
    const headingElement = screen.getByText('Notes from the session');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders character sheets', () => {
    render(<App />);
    const characterElements = screen.getAllByTestId('character-sheet');
    expect(characterElements.length).toBeGreaterThan(0);
    characterElements.forEach(element => {
      expect(element).toHaveTextContent('Mocked Character Sheet');
    });
  });
});