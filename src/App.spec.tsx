import { render, screen } from '@testing-library/react';
import App from './App';
describe('Test app', () => {
  it('Render Homepage', () => {
    render(<App />);
    expect(screen.getByText(/a/)).toBeInTheDocument();
  });
});
