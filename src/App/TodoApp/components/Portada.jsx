import { Helmet } from 'react-helmet';
import Back from '../assets/background.png';

export const Portada = () => {
  return (
    <>
      <Helmet>
        <title>Portada 😉</title>
      </Helmet>
      <section className='portada'>
        <img src={Back} alt='' />
        <h1>
          Manage your tasks <span>in one place</span>
        </h1>
      </section>
    </>
  );
};
