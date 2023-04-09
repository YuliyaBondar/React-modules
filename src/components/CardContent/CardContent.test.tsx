import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Card from './CardContent';

describe('CardContent Component', () => {
  test('If CardContent is rendered!', () => {
    const card = {
      name: 'Футболка Nike',
      releaseDate: '2021-01-02',
      image: 'https://images.satu.kz/199025374_w640_h640_futbolka-nike.jpg',
      category: 'Футболки',
      isFormelyUsed: true,
      material: 'хлопок',
      id: 1,
      status: 'unknown',
      species: 'Human',
      type: 'Genetic experiment',
      gender: 'Male',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Testicle Monster Dimension',
        url: 'https://rickandmortyapi.com/api/location/21',
      },
      created: '2017-11-04T19:59:20.523Z',
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
