import { useState } from 'react';
import { FetchData } from '../helpers/FetchData';

export const useInitialState = () => {
  const [searchArtist, setSearchArtist] = useState('');
  const [songData, setSongData] = useState([]);

  const handleChange = (e) => {
    setSearchArtist(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    FetchData(searchArtist).then(({ data: { data } }) => setSongData(data));

    setSearchArtist('');
  };

  return { searchArtist, handleChange, handleSubmit, songData };
};
