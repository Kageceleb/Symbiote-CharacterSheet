import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options });

// Test for the utilities file
describe('Testing utilities', () => {
  test('customRender should render a component', () => {
    const TestComponent = () => <div data-testid="test">Test</div>;
    const { getByTestId } = customRender(<TestComponent />);
    expect(getByTestId('test')).toHaveTextContent('Test');
  });
});

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render }; 