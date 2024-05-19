// Square.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Square from './Square';

test('renders square with correct value', () => {
  const onClick = jest.fn(); // Mocking onClick function
  const { getByText } = render(<Square value="X" onClick={onClick} />);
  const squareElement = getByText('X');
  expect(squareElement).toBeInTheDocument();
});

test('calls onClick function when clicked', () => {
  const onClick = jest.fn(); // Mocking onClick function
  const { getByRole } = render(<Square value="X" onClick={onClick} />);
  const squareElement = getByRole('button');
  fireEvent.click(squareElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
