import { useState } from 'react';
import axios from 'axios';

export const useInitialState = () => {
  const [searchArtist, setSearchArtist] = useState('');

  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: { term: '', offset: '0' },
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': '1c1606c74bmsh0e181c8950a7d22p10f75ajsndf5748021826',
    },
  };

  const fetchData = async (searchTerm) => {
    const response = await axios.request({ ...options, params: { ...options.params, term: searchTerm } });
    const { status, data } = response;
    console.log({ status, data });
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
