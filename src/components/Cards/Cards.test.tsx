import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Cards from './Cards';

describe('Cards Component', () => {
  test('If Cards are rendered!', () => {
    const cards = [
      {
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
      },
      {
        id: 2,
        name: "Джинсы Levi's",
        description: "Классические синие джинсы Levi's",
        price: 2000,
        image: 'https://i.pinimg.com/736x/79/28/3f/79283fe01476a65c286e3112b17e78d2.jpg',
        brand: "Levi's",
        category: 'Джинсы',
        color: 'синий',
        size: '30/32',
        material: 'деним',
        rating: 4.2,
      },
    ];
    render(
      <BrowserRouter>
        <Cards />
      </BrowserRouter>
    );
    cards.forEach((card) => {
      expect(screen.getByText(card.name)).toBeInTheDocument();
      expect(screen.getByText(card.brand)).toBeInTheDocument();
    });
  });
});
