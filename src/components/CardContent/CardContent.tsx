import { IResults } from '../../utils/interfaces';

import './CardContent.css';

type Props = {
  card: IResults;
};

function CardContent({ card }: Props) {
  return (
    <>
      <img src={card.image} alt={card.name} className="cards__item_img" />
      <div className="cards__item_characteristics">
        <p className="f-bold">{card.name}</p>
        {card.status && (
          <p>
            <span className="f-bold">Status:</span> {card.status}
          </p>
        )}
        {card.species && (
          <p>
            <span className="f-bold">Species:</span> {card.species}
          </p>
        )}
        {card.location && (
          <p>
            <span className="f-bold">Location: </span>
            {card.location.name}
          </p>
        )}
        {card.releaseDate && (
          <p>
            <span className="f-bold">Release date:</span> {card.releaseDate}
          </p>
        )}
        {card.category && (
          <p>
            <span className="f-bold">Category:</span> {card.category}
          </p>
        )}
        {card.material && (
          <p>
            <span className="f-bold">Material:</span> {card.material}
          </p>
        )}
      </div>
    </>
  );
}

export default CardContent;
