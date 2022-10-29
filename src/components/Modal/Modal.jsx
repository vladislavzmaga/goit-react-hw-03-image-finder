import { ModalBox, ModalWrapper } from './Modal.styled';

export const Modal = ({ item, close }) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <button onClick={close}>close</button>
        <img src={item.largeImageUR} alt={item.user} />
      </ModalBox>
    </ModalWrapper>
  );
};
