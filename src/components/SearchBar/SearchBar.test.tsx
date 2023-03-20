import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import SearchBar from './SearchBar';

describe('Search Component', () => {
  test('If SearchBar is rendered!', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
