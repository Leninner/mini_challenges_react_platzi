import { useState, useRef } from 'react';
import { FetchData } from '../helpers/FetchData';

export const useInitialState = () => {
  const [searchArtist, setSearchArtist] = useState('');
  const [songData, setSongData] = useState(() => {
    const data = localStorage.getItem('songsData');
    return data ? JSON.parse(data) : { datos: [], loading: false };
  });
  const [currentSong, setCurrentSong] = useState(0);

  const handleChange = (e) => {
    setSearchArtist(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSongData({ ...songData, loading: true });

    FetchData(searchArtist).then(({ data: { data } }) => {
      setSongData({ datos: data, loading: false });
      localStorage.setItem('songsData', JSON.stringify({ datos: data, loading: false }));
    });

    setSearchArtist('');
  };

  const audioRef = useRef(new Audio());

  return { searchArtist, handleChange, handleSubmit, songData, audioRef, currentSong, setCurrentSong };
};
