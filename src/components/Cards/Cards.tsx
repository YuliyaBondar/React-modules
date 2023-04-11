import Card from '../Card/Card';
import { IResults } from '../../utils/interfaces';

import './Cards.css';

type Props = {
  cards?: IResults[];
};

function Cards({ cards }: Props) {
  return (
    <div className="cards__container">
      {cards?.map((card, index) => (
        <Card card={card} key={card.id ? index + card.id : index} />
      ))}
    </div>
  );
}

export default Cards;
