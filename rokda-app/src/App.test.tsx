import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app name', () => {
  render(<App />);
  const titleElement = screen.getByText(/Rokda/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders watchlist', () => {
  render(<App />);
  const linkElement = screen.getByText(/Watchlist/i);
  expect(linkElement).toBeInTheDocument();
});

