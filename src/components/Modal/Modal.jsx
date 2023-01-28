import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
      const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });



  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

    return (
      createPortal( <Overlay onClick={handleBackDropClick}>
        <ModalContainer>
          <img src={largeImageURL} alt="" />
        </ModalContainer>
      </Overlay>, modalRoot
      )
    )
}
