import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Cards from './Cards';

describe('Cards Component', () => {
  test('If Cards are rendered!', () => {
    const cards = [
      {
        name: 'Футболка Nike',
        releaseDate: '2021-01-02',
        image: 'https://images.satu.kz/199025374_w640_h640_futbolka-nike.jpg',
        category: 'Футболки',
        isFormelyUsed: false,
        material: 'хлопок',
      },
      {
        name: "Джинсы Levi's",
        releaseDate: '2020-11-04',
        image: 'https://i.pinimg.com/736x/79/28/3f/79283fe01476a65c286e3112b17e78d2.jpg',
        category: 'Джинсы',
        isFormelyUsed: false,
        material: 'деним',
      },
    ];
    render(
      <BrowserRouter>
        <Cards cards={cards} />
      </BrowserRouter>
    );
    cards.forEach((card) => {
      expect(screen.getByText(card.name)).toBeInTheDocument();
      expect(screen.getByText(card.category)).toBeInTheDocument();
    });
  });
});
