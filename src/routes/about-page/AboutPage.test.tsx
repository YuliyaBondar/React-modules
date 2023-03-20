import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import AboutPage from './about-page';

describe('AboutPage', () => {
  test('If AboutPage is rendered!', () => {
    render(<AboutPage />);
    expect(screen.getByTestId('h2_developer')).toBeInTheDocument();
    expect(screen.getByTestId('github')).toHaveTextContent('My GitHub');
  });
});
