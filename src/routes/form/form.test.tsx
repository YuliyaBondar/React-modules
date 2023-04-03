import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import Form from './form';
import { BrowserRouter } from 'react-router-dom';

describe('Form', () => {
  test('If Form is rendered!', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Submit')).toBeInTheDocument();
  });
});
