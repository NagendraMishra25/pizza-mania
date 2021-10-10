import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('render footer with text', () => {
    render(<Footer />);
    const logo = screen.getByText(/Copyright/);
    expect(logo).toBeInTheDocument();
});
