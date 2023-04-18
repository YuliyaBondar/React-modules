import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Root from './root';

describe('Root', () => {
  test('If Root is rendered!', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
