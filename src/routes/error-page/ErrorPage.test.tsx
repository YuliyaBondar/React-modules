import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import ErrorPage from './error-page';
import { BrowserRouter } from 'react-router-dom';

describe('ErrorPage', () => {
  test('If ErrorPage is rendered!', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('h2_error')).toBeInTheDocument();
    expect(screen.getByTestId('error-text')).toHaveTextContent('Sorry, page is not found.');
  });
});
