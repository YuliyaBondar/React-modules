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

    const inputText = screen.getByTestId('input_text') as HTMLInputElement | null;
    expect(inputText).toBeTruthy();
    expect(inputText?.textContent).toBe('');
    if (inputText) {
      inputText.textContent = 'Футболка Nike';
      expect(inputText.textContent).toBe('Футболка Nike');
      expect(inputText.type).toBe('text');
      fireEvent.change(inputText, {
        target: {
          value: 'Футболка Nike',
        },
      });
      expect(inputText.value).toBe('Футболка Nike');
      expect(inputText).toBeRequired();
    }

    const inputDate = screen.getByTestId('input_date') as HTMLInputElement | null;
    expect(inputDate).toBeTruthy();
    expect(inputDate?.textContent).toBe('');
    if (inputDate) {
      inputDate.textContent = '2023-01-04';
      expect(inputDate.textContent).toBe('2023-01-04');
      expect(inputDate.type).toBe('date');
      fireEvent.change(inputDate, {
        target: {
          value: '2023-01-04',
        },
      });
      expect(inputDate.value).toBe('2023-01-04');
      expect(inputDate).toBeRequired();
    }
  });
});
