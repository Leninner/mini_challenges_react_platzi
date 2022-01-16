import { useState } from 'react';
import axios from 'axios';

export const useInitialState = () => {
  const [searchArtist, setSearchArtist] = useState('');

  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: '' },
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '1c1606c74bmsh0e181c8950a7d22p10f75ajsndf5748021826',
    },
  };

  const fetchData = async (searchTerm) => {
    const response = await axios.request({ ...options, params: { q: searchTerm } });
    console.log(response);
  };

  const handleChange = (e) => {
    setSearchArtist(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(searchArtist);

    setSearchArtist('');
  };

  return { searchArtist, handleChange, handleSubmit };
};
