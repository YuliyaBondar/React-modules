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

    const inputIsAgreed = screen.getByTestId('input_checkbox') as HTMLInputElement | null;
    expect(inputIsAgreed).toBeTruthy();
    expect(inputIsAgreed?.checked).toBe(false);
    if (inputIsAgreed) {
      inputIsAgreed.checked = true;
      expect(inputIsAgreed.checked).toBe(true);
      expect(inputIsAgreed.type).toBe('checkbox');
      fireEvent.change(inputIsAgreed, {
        target: {
          checked: true,
        },
      });
    }

    const categorySelectValue = screen.getByTestId('select') as HTMLInputElement | null;
    expect(categorySelectValue).toBeTruthy();
    expect(categorySelectValue?.value).toBe('Футболки');
    if (categorySelectValue) {
      categorySelectValue.value = 'Джинсы';
      expect(categorySelectValue.value).toBe('Джинсы');
      fireEvent.change(categorySelectValue, {
        target: {
          value: 'Джинсы',
        },
      });
      expect(categorySelectValue).toBeRequired();
    }

    const imageFileInput = screen.getByTestId('input_file') as HTMLInputElement | null;
    expect(imageFileInput).toBeTruthy();
    if (imageFileInput) {
      expect(imageFileInput).toBeRequired();
    }
  });
});
