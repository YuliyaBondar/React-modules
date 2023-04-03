import { fireEvent, render, screen } from '@testing-library/react';
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

    const input = screen.getByTestId('input_text') as HTMLInputElement | null;
    expect(input).toBeTruthy();
    expect(input?.textContent).toBe('');
    if (input) {
      input.textContent = 'Футболка Nike';
      expect(input.textContent).toBe('Футболка Nike');
      expect(input.type).toBe('text');
      fireEvent.change(input, {
        target: {
          value: 'Футболка Nike',
        },
      });
      expect(input.value).toBe('Футболка Nike');
      expect(input).toBeRequired();
    }
  });
});
