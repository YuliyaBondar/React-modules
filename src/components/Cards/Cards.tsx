import Card from '../Card/Card';
import React from 'react';
import { IData } from 'utils/interfaces_and_types';
import cardsData from '../../utils/cardsData';

import './Cards.css';

const data: IData[] = cardsData;

function Cards() {
  return (
    <div className="cards__container">
      {data.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Cards;
