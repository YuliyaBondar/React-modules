import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('If SearchBar is rendered!', () => {
    render(<SearchBar searchValue={''} />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
