import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header with logo', () => {
  render(<App />);
  const headerLink = screen.getByText('Pizza Mania');
  expect(headerLink).toBeInTheDocument();
});

test('renders home component with loading state', () => {
  render(<App />);
  const footer = screen.getByText(/Loading/);
  expect(footer).toBeInTheDocument();
});

test('renders footer with text', () => {
  render(<App />);
  const footer = screen.getByText(/Copyright/);
  expect(footer).toBeInTheDocument();
});