import { Helmet } from 'react-helmet';
import { SearchBar } from './components/SearchBar';
import { ReturnToHome } from '../ReturnToHome';
import { useState } from 'react';
import { Grid } from './containers/Grid';

export const GifsApp = () => {
  const [search, setSearch] = useState('');
  const [gifs, setGifs] = useState(() => {
    const gifs = sessionStorage.getItem('search');
    return gifs ? gifs : '';
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
    sessionStorage.setItem('search', e.target.value);
  };

  const handleClick = () => {
    setGifs(search);
    setSearch('');
  };

  return (
    <>
      <Helmet>
        <title>Gifs App 😉</title>
      </Helmet>
      <header className='w-full py-16 text-center shadow-sm cursor-default bg-gradient-to-r from-fuchsia-600 to-indigo-600 shadow-gray-500'>
        <h1 className='text-5xl font-bold text-white'>
          Gifs <span className='text-yellow'>App</span>
        </h1>
        <ReturnToHome />
      </header>
      <SearchBar onChange={handleChange} value={search} onClick={handleClick} />
      <Grid search={gifs} />
    </>
  );
};
