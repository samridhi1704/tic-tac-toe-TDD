// Board.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

// Mocking the calculateWinner function for testing purposes
jest.mock('../util/CalculateWinner', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Board Component', () => {
  test('renders board with correct initial state', () => {
    const { getAllByRole, getByText } = render(<Board />);
    const squareElements = getAllByRole('button');
    expect(squareElements).toHaveLength(9);
    expect(getByText('Next player: X')).toBeInTheDocument();
  });

  test('allows clicking on squares and updates state accordingly', () => {
    const { getAllByRole, getByText } = render(<Board />);
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

  test('does not allow clicking on already filled squares', () => {
    const { getAllByRole } = render(<Board />);
    const squareElements = getAllByRole('button');

    fireEvent.click(squareElements[0]);
    fireEvent.click(squareElements[0]); // Trying to click on the same square again

    expect(squareElements[0]).toHaveTextContent('X'); // Square value should remain X
  });
});
