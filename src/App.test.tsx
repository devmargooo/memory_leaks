import React from 'react';
import { render, screen } from '@testing-library/react';
import Analitic from './Analitic';

test('renders learn react link', () => {
  render(<Analitic />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
