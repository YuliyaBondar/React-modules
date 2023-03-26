import Card from '../Card/Card';
import { IData } from '../../utils/interfaces';

import './Cards.css';

type Props = {
  cards: IData[];
};

function Cards({ cards }: Props) {
  return (
    <div className="cards__container">
      {cards.map((card) => (
        <Card card={card} key={card.name} />
      ))}
    </div>
  );
}

export default Cards;
