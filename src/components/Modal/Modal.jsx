import PropTypes from 'prop-types';
import { ModalBox, ModalWrapper, ModalCloseBtn } from './Modal.styled';
import { createPortal } from 'react-dom';

export const Modal = ({ item, onClose }) => {
  return createPortal(
    <ModalWrapper>
      <ModalBox>
        <ModalCloseBtn type="button" onClick={onClose}>
          X
        </ModalCloseBtn>
        <img src={item.largeImageURL} alt={item.user} />
      </ModalBox>
    </ModalWrapper>,
    document.querySelector('#modal-root')
    // );
  );
};
Modal.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
