import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('If Header is rendered!', () => {
    render(
      <BrowserRouter>
        <Header title="About us" />
      </BrowserRouter>
    );
    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });
});
