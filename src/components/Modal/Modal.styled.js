import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalBox = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 60px;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border: none;
  width: 40px;
  heigth: 40px;
  font-size: 24px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: darkgrey;
    scale: 1.2;
  }
`;
