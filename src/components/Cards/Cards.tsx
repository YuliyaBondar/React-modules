import Card from '../Card/Card';
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
        <Card card={card} />
      ))}
    </div>
  );
}

export default Cards;
