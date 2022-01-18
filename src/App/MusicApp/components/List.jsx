import { Item } from './Item';
import { MusicAppContext } from '../context';
import { useContext } from 'react';

export const List = () => {
  const { songData } = useContext(MusicAppContext);

  const { datos, loading } = songData;

  return (
    <section className='min-h-screen pt-5 bg-gray-300 lg:grid lg:grid-cols-4 lg:w-full lg:grid-flow-row'>
      {loading ? (
        <p className='feedback'>Loading...</p>
      ) : (
        datos.map((song, index) => {
          const { id } = song;

          return <Item key={id} {...song} index={index} />;
        })
      )}
    </section>
  );
};
