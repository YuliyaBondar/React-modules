import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IResults } from '../../utils/interfaces';
import CardContent from '../CardContent/CardContent';

import './CardPopUp.css';

type Props = {
  card: IResults;
};

function Card({ card }: Props) {
  return (
    <>
      <Popup
        trigger={
          <div className="cards__item">
            <CardContent card={card} />
          </div>
        }
        modal
        nested
      >
        <div className="modal">
          <div>
            <button onClick={close} className="close">
              X
            </button>
          </div>
          <div className="modalContent">
            <CardContent card={card} />
            <div className="cards__item_characteristics">
              {card.type && (
                <p>
                  <span className="f-bold">Type:</span> {card.type}
                </p>
              )}
              {card.gender && (
                <p>
                  <span className="f-bold">Gender:</span> {card.gender}
                </p>
              )}
              {card.origin && (
                <p>
                  <span className="f-bold">Origin:</span> {card.origin.name}
                </p>
              )}
              {card.created && (
                <p>
                  <span className="f-bold">Created:</span> {card.created}
                </p>
              )}
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default Card;
