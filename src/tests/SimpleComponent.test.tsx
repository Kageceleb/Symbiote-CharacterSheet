import React from 'react';
import { render, screen } from '@testing-library/react';

// Sample component to test
const SimpleComponent: React.FC<{ message: string }> = ({ message }) => {
  return <div data-testid="simple-component">{message}</div>;
};

describe('SimpleComponent', () => {
  test('renders the message', () => {
    render(<SimpleComponent message="Hello World" />);
    const element = screen.getByTestId('simple-component');
    expect(element).toHaveTextContent('Hello World');
  });
}); 