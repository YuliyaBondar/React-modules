import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'fetch-mock';
import CardsOnMain from './CardsOnMain';

describe('CardsOnMain Component', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  test('If CardsOnMain is rendered!', () => {
    render(
      <BrowserRouter>
        <CardsOnMain />
      </BrowserRouter>
    );
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
