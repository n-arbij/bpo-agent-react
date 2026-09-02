import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Clearline CX support messaging', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /Support that protects your brand and keeps growth moving/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Customer support that scales with you/i)
  ).toBeInTheDocument();
});
