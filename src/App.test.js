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
  expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
    'href',
    'mailto:clearlinecxoutsourcing@gmail.com'
  );
  expect(screen.getAllByRole('link', { name: /Call \+254 703 958 727/i }).length).toBeGreaterThan(0);
  expect(screen.queryByRole('textbox', { name: /Your name/i })).not.toBeInTheDocument();
});
