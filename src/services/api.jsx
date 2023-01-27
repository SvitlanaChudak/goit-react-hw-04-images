import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '31623736-4a8fa2402be59476e61396bec',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (searchQuery, page) => {
  const {data} = await axios.get(`?q=${searchQuery}&page=${page}`);
  return data;
};
