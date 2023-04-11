import Card from '../Card/Card';
import { IResults } from '../../utils/interfaces';

import './Cards.css';

type Props = {
  cards?: IResults[];
};

function Cards({ cards }: Props) {
  return (
    <div className="cards__container">
      {cards?.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Cards;
