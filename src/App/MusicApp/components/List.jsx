import { Item } from './Item';
import { MusicAppContext } from '../context';
import { useContext } from 'react';

export const List = () => {
  const { songData } = useContext(MusicAppContext);

  return (
    <section className='min-h-screen pt-5 bg-gray-300 lg:grid lg:grid-cols-4 lg:w-full lg:grid-flow-row'>
      {songData.map((song, index) => {
        const { id } = song;

        return <Item key={id} {...song} index={index} />;
      })}
    </section>
  );
};
