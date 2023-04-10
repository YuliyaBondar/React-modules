import { ReactNode } from 'react';

import './Modal.css';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <button onClick={props.toggle} className="close">
              X
            </button>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
