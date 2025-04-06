import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock ReactDOM
jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('Application Entry Point (index.tsx)', () => {
  // Save original implementation
  const originalGetElementById = document.getElementById;

  // Setup mocks
  beforeEach(() => {
    // Mock document.getElementById
    document.getElementById = jest.fn(() => document.createElement('div'));
  });

  // Restore original implementations
  afterEach(() => {
    document.getElementById = originalGetElementById;
    jest.clearAllMocks();
  });

  it('should render App component to the DOM', () => {
    // Import index.tsx which will execute the code
    require('../index.tsx');

    // Check if document.getElementById was called with 'root'
    expect(document.getElementById).toHaveBeenCalledWith('root');

    // Get the createRoot mock
    const { createRoot } = require('react-dom/client');

    // Check if createRoot was called
    expect(createRoot).toHaveBeenCalled();

    // Check if render was called on the root with React.StrictMode and App
    const mockRoot = createRoot.mock.results[0].value;
    expect(mockRoot.render).toHaveBeenCalledTimes(1);

    // Check that the first argument to render is a React element
    const renderCall = mockRoot.render.mock.calls[0][0];
    expect(renderCall.type).toBe(React.StrictMode);
    expect(renderCall.props.children.type).toBe(App);
  });
});