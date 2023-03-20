import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

describe('Card Component', () => {
  test('If Card is rendered!', () => {
    const card = {
      id: 1,
      name: 'Футболка Nike',
      description: 'Простая белая футболка с логотипом Nike',
      price: 500,
      image: 'https://images.satu.kz/199025374_w640_h640_futbolka-nike.jpg',
      brand: 'Nike',
      category: 'Футболки',
      color: 'белый',
      size: 'M',
      material: 'хлопок',
      rating: 4.5,
    };
    render(
      <BrowserRouter>
        <Card card={card} />
      </BrowserRouter>
    );
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByText(card.brand)).toBeInTheDocument();
  });
});
