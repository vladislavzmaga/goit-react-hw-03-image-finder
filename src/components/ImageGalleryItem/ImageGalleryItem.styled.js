import styled from 'styled-components';

export const GalleryItem = styled.li`
  display: block;
  text-decoration: none;
  color: black;
  width: calc((100% / 4 - 30px));
  height: 250px;
  margin-left: 30px;
  margin-bottom: 30px;
  transition: transform 500ms;
  :hover {
    transform: scale(1.07);
    cursor: pointer;
  }
`;

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
