import { render, screen, fireEvent } from '@testing-library/react';
import { Pizza } from '../../models/pizza.model';
import { Basket } from './Basket';
import HomeContext from '../../context/home-context';


const  renderBaasket = (value: any) => {
    return render(
      <HomeContext.Provider value={value}>
        <Basket />
      </HomeContext.Provider>
    );
  }

test('render default empty basket', () => {
    renderBaasket({orderList: []});
    const emptybasket = screen.getByText(/No items in your basket/);
    expect(emptybasket).toBeInTheDocument();
});

test('render default empty basket with zero total value', () => {
    renderBaasket({orderList: []});
    const totalVal = screen.getByText('$ 0');
    expect(totalVal).toBeInTheDocument();
});

test('render basket with selected orders', () => {
    const mockOrders = [
        {
            id: 1,
            name: 'test name1',
            price: 99,
            currency: '$',
            orderId: 1,
            toppings: [],
            size: 'small'
        },
        {
            id: 2,
            name: 'test name2',
            price: 199,
            currency: '$',
            orderId: 2,
            toppings: [],
            size: 'large'
        }
    ]
    renderBaasket({orderList: mockOrders});
    const orders = screen.getAllByRole('order-item');
    expect(orders.length).toEqual(mockOrders.length);
});
