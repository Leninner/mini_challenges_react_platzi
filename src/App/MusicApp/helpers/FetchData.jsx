import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  params: { q: '' },
  headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': '1c1606c74bmsh0e181c8950a7d22p10f75ajsndf5748021826',
  },
};

export const FetchData = async (searchTerm) => {
  const response = await axios.request({ ...options, params: { q: searchTerm } });
  const { status, data } = response;
  return { status, data };
};
