import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

describe('Card Component', () => {
  test('If Card is rendered!', () => {
    const card = {
      name: 'Футболка Nike',
      releaseDate: '2021-01-02',
      image: 'https://images.satu.kz/199025374_w640_h640_futbolka-nike.jpg',
      category: 'Футболки',
      isFormelyUsed: true,
      material: 'хлопок',
    };
    render(
      <BrowserRouter>
        <Card card={card} />
      </BrowserRouter>
    );
    expect(screen.getByText(card.name)).toBeInTheDocument();
    expect(screen.getByText(card.category)).toBeInTheDocument();
  });
});
