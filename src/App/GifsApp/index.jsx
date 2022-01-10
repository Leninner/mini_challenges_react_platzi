import { Helmet } from 'react-helmet';
import { Grid } from './containers/Grid';
import { SearchBar } from './components/SearchBar';

export const GifsApp = () => {
  return (
    <>
      <Helmet>
        <title>Gifs App 😉</title>
      </Helmet>
      <header className='w-screen py-20 bg-black'>
        <h1>Gifs App</h1>
      </header>
      <SearchBar />
      <Grid />
    </>
  );
};
