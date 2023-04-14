import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  test('If SearchBar is rendered!', () => {
    render(<Pagination page={1} filteredResults={[]} />);
    expect(screen.getByText('next')).toBeInTheDocument();
  });
});
