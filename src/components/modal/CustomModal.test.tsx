import { render, screen, fireEvent } from '@testing-library/react';
import { CustomModal } from './CustomModal';
import HomeContext from '../../context/home-context';
import HomeState from '../../context/HomeState';


const handleClose  = jest.fn();

const renderCustomModal = (value: any) => {
    const selectedPizza = {
        id: 1,
        name: 'test name',
        price: 99,
        currency: '$'
    };
    return render(
      <HomeContext.Provider value={value}>
        <CustomModal selectedPizza={selectedPizza} onClose={handleClose} />
      </HomeContext.Provider>
    );
  }

  const renderCustomModalWithState  = (val: any) => {
    const selectedPizza = {
      id: 1,
      name: 'test name',
      price: 99,
      currency: '$'
  };
    return render(
      <HomeState>
      < CustomModal selectedPizza={selectedPizza} onClose={handleClose} />
      </HomeState>
    );
  };

const mockFnComp = () => {

};

test('render custom modal', () => {
    renderCustomModal({});
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
});

test('should close modal on close', () => {
  renderCustomModal({});
  fireEvent.click(screen.getByText('Cancel'));
  expect(handleClose).toHaveBeenCalled();
});

test('should add order on add click', () => {
  const addOrder = jest.fn();
  renderCustomModal({addOrder});
  fireEvent.click(screen.getByText('Add to Basket'));
  expect(addOrder).toHaveBeenCalled();
});

test('should render modal with state and add order', () => {
  renderCustomModalWithState({});
  const addBtn = screen.getByText('Add to Basket');
  fireEvent.click(addBtn);
});
