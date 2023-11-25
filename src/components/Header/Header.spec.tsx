import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Test Header', () => {
  beforeEach(() => {
    vi.mock('./components/HeaderTop', () => ({
      default: () => <div>Header Top</div>
    }));
  });

  it('Render Logo page', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByAltText(/Flatize logo/)).toBeInTheDocument();
  });

  it('Open Hamburger menu at responsive site', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const hamburgerIcon = screen.getByTestId('basic-menu-responsive');
    userEvent.click(hamburgerIcon);
    expect(screen.findByTestId('menu-item-responsive')).toBeInTheDocument();
  });
});
