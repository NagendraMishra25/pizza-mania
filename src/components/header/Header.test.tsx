import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('render header with logo img', () => {
    render(<Header />);
    const logo = screen.getByAltText('header logo');
    expect(logo).toBeInTheDocument();
});

test('render header with logo text', () => {
    render(<Header />);
    const headerText = screen.getByText('Pizza Mania');
    expect(headerText).toBeInTheDocument();
});