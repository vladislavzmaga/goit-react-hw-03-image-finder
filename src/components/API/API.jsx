import axios from 'axios';

const API_KEY = '29843837-89aa08ca674206f7a0cb82fcb';

export const fetchImages = async (value, page, perPage) => {
  const respounse = await axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return respounse;
};
