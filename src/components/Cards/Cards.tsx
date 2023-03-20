import React from 'react';
import { IData } from 'types/types';

import './Cards.css';

async function getData(): Promise<Array<IData>> {
  const response = await fetch(
    'https://raw.githubusercontent.com/YuliyaBondar/image-data/master/cards.json'
  );
  try {
    return await response.json();
  } catch (error) {
    throw new Error(response.statusText);
  }
}

const data: IData[] = await getData();

function Cards() {
  return (
    <div className="cards__container">
      {data.map((card) => (
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
      ))}
    </div>
  );
}

export default Cards;
