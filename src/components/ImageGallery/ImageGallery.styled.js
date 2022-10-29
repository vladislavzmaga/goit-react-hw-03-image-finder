import styled from 'styled-components';

export const StartTitle = styled.h1`
  text-align: center;
  color: green;
`;

export const SecondTitle = styled.h1`
  text-align: center;
  color: red;
`;

export const GalleryList = styled.ul`
  list-style: none;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-bottom: -30px;
`;

export const ToStartBtn = styled.a`
  position: fixed;
  cursor: pointer;
  bottom: 100px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: transform 500ms;
  background-color: yellow;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
  color: white;
  background-color: crimson;
  transform: scale(1.2);
`;
