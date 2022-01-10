import { Helmet } from 'react-helmet';
import { Grid } from './containers/Grid';
import { SearchBar } from './components/SearchBar';
import { BiHomeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const GifsApp = () => {
  return (
    <>
      <Helmet>
        <title>Gifs App 😉</title>
      </Helmet>
      <header className='w-screen py-16 text-center bg-gradient-to-r from-fuchsia-600 to-indigo-600'>
        <h1 className='text-5xl font-bold text-white'>
          Gifs <span className='text-yellow'>App</span>
        </h1>
        <div className='absolute p-5 duration-300 bg-white rounded-full -left-3 -top-3 hover:bg-blue-sky hover:text-white'>
          <Link to='/'>
            <BiHomeAlt size='30' />
          </Link>
        </div>
      </header>
      <SearchBar />
      <Grid />
    </>
  );
};
