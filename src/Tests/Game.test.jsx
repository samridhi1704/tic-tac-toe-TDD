// Game.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from './Game';

test('renders game with correct initial state', () => {
  const { getByText, getAllByRole } = render(<Game />);
  const statusElement = getByText('Next player: X');
  const squareElements = getAllByRole('button');
  expect(statusElement).toBeInTheDocument();
  expect(squareElements).toHaveLength(9);
});

test('allows clicking on squares and updates game state accordingly', () => {
  const { getAllByRole, getByText } = render(<Game />);
  const squareElements = getAllByRole('button');

  fireEvent.click(squareElements[0]);
  expect(getByText('Next player: O')).toBeInTheDocument();

  fireEvent.click(squareElements[1]);
  fireEvent.click(squareElements[3]);
  fireEvent.click(squareElements[4]);
  fireEvent.click(squareElements[6]);
  fireEvent.click(squareElements[7]);

  expect(getByText('Winner of the game: X')).toBeInTheDocument();
});

test('resets the game state after clicking on reset button', () => {
  const { getByText, getAllByRole } = render(<Game />);
  const squareElements = getAllByRole('button');

  fireEvent.click(squareElements[0]);
  fireEvent.click(squareElements[1]);
  fireEvent.click(getByText('Reset')); // Clicking on the reset button

  expect(getByText('Next player: X')).toBeInTheDocument();
  squareElements.forEach(square => {
    expect(square).toHaveTextContent('');
  });
});
