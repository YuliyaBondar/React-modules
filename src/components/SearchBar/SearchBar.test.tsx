import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('If SearchBar is rendered!', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
