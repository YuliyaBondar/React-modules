import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Modal from './Modal';

describe('Modal Component', () => {
  test('If Modal is rendered!', () => {
    render(
      <BrowserRouter>
        <Modal isOpen={true} toggle={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('modal-box')).toBeInTheDocument();
  });
});
