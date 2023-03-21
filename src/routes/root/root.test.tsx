import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import Root from './root';
import { BrowserRouter } from 'react-router-dom';

describe('Root', () => {
  test('If Root is rendered!', () => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
