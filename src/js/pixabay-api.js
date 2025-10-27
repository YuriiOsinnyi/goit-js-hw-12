import axios from 'axios';

const API_KEY = '52824914-67b35cbaeb2ca1734ba8e47a6';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export const getImagesByQuery = async (query, page) => {
  const { data } = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });
  return data;
};
