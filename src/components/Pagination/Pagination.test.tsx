import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination Component', () => {
  test('If SearchBar is rendered!', () => {
    render(<Pagination page={1} filteredResults={[]} />);
    userEvent.click(screen.getByTestId('pagePrev'));
    userEvent.click(screen.getByText('next'));
    expect(screen.getByText('next')).toBeInTheDocument();
  });
});
