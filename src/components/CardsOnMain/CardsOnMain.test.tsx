import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import CardsOnMain from './CardsOnMain';

global.fetch = vi.fn();

describe('CardsOnMain Component', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('If CardsOnMain is rendered!', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardsOnMain />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    fetchMock.mock('https://rickandmortyapi.com/api/character', {
      status: 200,
    });
  });

  test('Verify if cards are retrieved on button click - error page not found', async () => {
    fetchMock.mock('https://rickandmortyapi.com/api/character', {
      status: 404,
    });
  });
});
