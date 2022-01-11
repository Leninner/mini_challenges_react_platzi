import { Helmet } from 'react-helmet';
import { SearchBar } from './components/SearchBar';
import { BiHomeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Grid } from './containers/Grid';

export const GifsApp = () => {
  const [search, setSearch] = useState('');
  const [gifs, setGifs] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
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
      <header className='w-screen py-16 text-center bg-gradient-to-r from-fuchsia-600 to-indigo-600'>
        <h1 className='text-5xl font-bold text-white'>
          Gifs <span className='text-yellow'>App</span>
        </h1>
        <Link to='/'>
          <div className='absolute p-5 duration-300 bg-white rounded-full -left-3 -top-3 hover:bg-blue-sky hover:text-white'>
            <BiHomeAlt size='30' />
          </div>
        </Link>
      </header>
      <SearchBar onChange={handleChange} value={search} onClick={handleClick} />
      <Grid search={gifs} />
    </>
  );
};
