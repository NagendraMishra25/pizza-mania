import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import HomeContext from '../../context/home-context';

const  renderHome = (value: any) => {
    return render(
      <HomeContext.Provider value={value}>
        <Home />
      </HomeContext.Provider>
    );
  };

const mockResponse = [
  {
      id: 1,
      name: 'test name1',
      price: 99,
      currency: '$'
  },
  {
      id: 2,
      name: 'test name2',
      price: 199,
      currency: '$'
  }
];

afterEach(() => {
  jest.restoreAllMocks();
});

test('render default home with loading state', () => {
    renderHome({});
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
});

test('render home with error state', async() => {
  renderHome({});
  const loading = await screen.findByText('Something went wrong!');
  expect(loading).toBeInTheDocument();
});

test('render with mock data', async() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  } as any);

  renderHome({});
  const loading = await screen.findAllByAltText('pizza image');
  expect(loading.length).toEqual(mockResponse.length);
});

