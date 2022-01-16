import { useContext } from 'react';
import { MusicAppContext } from '../context';

export const SearchBar = () => {
  const { searchArtist, handleChange, handleSubmit } = useContext(MusicAppContext);

  return (
    <form className='absolute left-0 right-0 z-50 flex justify-center -bottom-5' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search for a song'
        className='inputMusicApp'
        value={searchArtist}
        onChange={handleChange}
      />
    </form>
  );
};
