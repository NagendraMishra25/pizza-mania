import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

test('render layout with header', () => {
    render(<Layout />);
    const headerText = screen.getByText('Pizza Mania');
    expect(headerText).toBeInTheDocument();
});

test('render layout with container placeholder', () => {
    render(<Layout>test children</Layout>);
    const children = screen.getByText('test children');
    expect(children).toBeInTheDocument();
});

test('render layout with footer', () => {
    render(<Layout />);
    const footerText = screen.getByText(/Copyright/);
    expect(footerText).toBeInTheDocument();
});