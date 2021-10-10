import { render, screen, fireEvent } from '@testing-library/react';
import { Pizza } from '../../models/pizza.model';
import { CustomCard } from './CustomCard';

let mockPizza: Pizza;

beforeEach(() => {
    mockPizza = {
        id: 1,
        name: 'test name',
        price: 99,
        currency: '$'
    };
});

test('render custom card', () => {
    render(<CustomCard pizza={mockPizza} onSelect={jest.fn()} />);
    const pizzaImg = screen.getByAltText('pizza image');
    const name = screen.getByText(/test name/);
    expect(pizzaImg).toBeInTheDocument();
    expect(name).toBeInTheDocument();
});

test('should call onselect when click choose', () => {
    const mockSelect = jest.fn();
    render(<CustomCard pizza={mockPizza} onSelect={mockSelect} />);
    fireEvent.click(screen.getByText('Choose'))
    expect(mockSelect).toHaveBeenCalled();
});