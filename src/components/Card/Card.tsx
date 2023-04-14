import 'reactjs-popup/dist/index.css';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import { IResults } from '../../utils/interfaces';
import CardContent from '../CardContent/CardContent';

import './Card.css';

type Props = {
  card: IResults;
};

function Card({ card }: Props) {
  const { isOpen, toggle } = useModal();
  return (
    <>
      <div className="cards__item" onClick={toggle}>
        <CardContent card={card} />
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="modal">
          <div className="modal-content">
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
      </Modal>
    </>
  );
}

export default Card;
