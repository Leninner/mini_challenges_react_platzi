import { Item } from './Item';
import { MusicAppContext } from '../context';
import { useContext } from 'react';

export const List = () => {
  const { songData } = useContext(MusicAppContext);

  return (
    <section className='container pt-5 bg-gray-300'>
      {songData.map((song) => {
        const { id } = song;
        return <Item key={id} {...song} />;
      })}
    </section>
  );
};
