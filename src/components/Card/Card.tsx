import { IData } from '../../utils/interfaces';

import './Card.css';

type Props = {
  card: IData;
};

function Card({ card }: Props) {
  return (
    <div className="cards__item">
      <img src={card.image} alt={card.name} className="cards__item_img" />
      <div className="cards__item_characteristics">
        <p>
          <span className="f-bold">{card.name}</span>
        </p>
        <p>
          <span className="f-bold">Release date:</span> {card.releaseDate}
        </p>
        <p>
          <span className="f-bold">Category:</span> {card.category}
        </p>
        <p>
          <span className="f-bold">Is formely used:</span>{' '}
          {card.isFormelyUsed == 'off' ? 'no' : 'yes'}
        </p>
        <p>
          <span className="f-bold">Material:</span> {card.material}
        </p>
      </div>
    </div>
  );
}

export default Card;
