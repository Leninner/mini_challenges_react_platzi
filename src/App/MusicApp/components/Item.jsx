import { AiOutlineLink } from 'react-icons/ai';
import { InfoItem } from './InfoItem';
import { MusicAppContext } from '../context';
import { useContext } from 'react';

export const Item = (props) => {
  const {
    title,
    link,
    duration,
    album: { cover_big, title: albumTitle, cover_small },
    rank,
    artist: { name: artistName, id: artistId, picture_small: artistPicture },
    index,
  } = props;

  const { setCurrentSong } = useContext(MusicAppContext);

  const handleClick = () => {
    setCurrentSong(index);
  };

  const secondsToMinutes = (seconds) =>
    Math.floor(seconds / 60) + ':' + (seconds % 60 < 10 ? '0' : '') + (seconds % 60);

  return (
    <div className='flex flex-col items-center w-5/6 h-auto m-auto mt-5 bg-white shadow-lg lg:w-11/12 shadow-slate-900 rounded-3xl'>
      <div className='relative flex flex-col items-center w-full'>
        <AiOutlineLink
          size='35'
          className='absolute z-50 p-1 text-white bg-black rounded-full opacity-80 hover:opacity-100 -top-2 -right-2 '
          onClick={() => window.open(link)}
        />

        <img src={cover_big} alt='' className='w-full h-full rounded-t-3xl' onClick={handleClick} />
        <div className='absolute bottom-0 w-full h-1/3 md:h-1/5 bg-gradient-to-b from-transparent to-black opacity-90' />

        <div className='absolute flex items-center justify-between w-full px-5 text-white cursor-pointer bottom-2'>
          <p className='text-lg font-bold w-44 md:w-full'>{title}</p>
          <p className='text-right'>
            Duration: <span className='font-bold'>{secondsToMinutes(duration)}</span>
          </p>
        </div>
      </div>

      <InfoItem
        albumTitle={albumTitle}
        cover_small={cover_small}
        rank={rank}
        artistName={artistName}
        artistId={artistId}
        artistPicture={artistPicture}
      />
    </div>
  );
};
