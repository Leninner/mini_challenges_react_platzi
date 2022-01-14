import { useState } from 'react';
import axios from 'axios';

export const useInitialState = () => {
  const [searchArtist, setSearchArtist] = useState('');

  const fetchData = async (url) => {
    const response = await axios.get(url, {
      mode: 'no-cors',
    });

    return response;
  };

  const handleChange = (e) => {
    setSearchArtist(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(
      `https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${searchArtist}&page_size=5&apikey=	1560a82e79bee9e84d481008bf582bb1`
    ).then((response) => console.log(response));

    setSearchArtist('');
  };

  return { searchArtist, handleChange, handleSubmit };
};
