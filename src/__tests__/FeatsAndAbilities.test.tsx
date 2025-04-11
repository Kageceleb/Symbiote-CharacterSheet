import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FeatsAndAbilities } from '../components/FeatsAndAbilities';
import { mockTS } from './mocks';

describe('FeatsAndAbilities', () => {
  const mockCharacterData = {
    feats: ['Weapon Focus', 'Toughness'],
    languages: ['Common', 'Dwarvish'],
    resistances: ['Fire 5'],
    notes: 'Test character notes'
  };

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders feats correctly', () => {
    const { getByText } = render(
      <FeatsAndAbilities characterData={mockCharacterData as any} />
    );

    // Check if feats are rendered
    expect(getByText('Weapon Focus')).toBeInTheDocument();
    expect(getByText('Toughness')).toBeInTheDocument();
  });

  it('renders languages correctly', () => {
    const { getByText } = render(
      <FeatsAndAbilities characterData={mockCharacterData as any} />
    );

    // Check if languages are rendered as a combined string
    expect(getByText('Common, Dwarvish')).toBeInTheDocument();
  });

  it('renders resistances correctly', () => {
    const { getByText } = render(
      <FeatsAndAbilities characterData={mockCharacterData as any} />
    );

    // Check if resistances are rendered
    expect(getByText('Fire 5')).toBeInTheDocument();
  });

  it('renders notes correctly', () => {
    const { getByText } = render(
      <FeatsAndAbilities characterData={mockCharacterData as any} />
    );

    // Check if notes are rendered
    expect(getByText('Test character notes')).toBeInTheDocument();
  });
}); 