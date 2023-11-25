import { render, screen } from '@testing-library/react';
import App from './App';
describe('Test app', () => {
  it('Render Homepage', () => {
    vi.mock('./routes/AllRoutes', () => ({
      default: () => {
        return <div>All Routes</div>;
      }
    }));
    vi.mock('./components/Footer/Footer', () => ({
      default: () => {
        return <div>Footer</div>;
      }
    }));
    vi.mock('@flatize/components/Header/Header', () => ({
      default: () => {
        return <div>Header</div>;
      }
    }));
    render(<App />);
    expect(screen.getByText(/All Routes/)).toBeInTheDocument();
    expect(screen.getByText(/Header/)).toBeInTheDocument();
    expect(screen.getByText(/Footer/)).toBeInTheDocument();
  });
});
