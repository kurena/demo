import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading screen by default', () => {
  render(<App />);
  const element = screen.getByTestId('ball-triangle-loading')
  expect(element).toBeInTheDocument();
});
