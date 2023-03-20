import React from 'react';
import { IData } from 'types/types';

import './Card.css';

type Props = {
  card: IData;
};

function Card({ card }: Props) {
  return (
    <div key={card.id} className="cards__item">
      <img src={card.image} alt={card.name} className="cards__item_img" />
      <div className="cards__item_characteristics">
        <p>
          <span className="f-bold">{card.name}</span>
        </p>
        <p>
          <span className="f-bold">Price:</span> {card.price}$
        </p>
        <p>
          <span className="f-bold">Brand:</span> {card.brand}
        </p>
        <p>{card.rating}☆</p>
      </div>
    </div>
  );
}

export default Card;
