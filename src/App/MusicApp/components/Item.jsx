import { AiOutlineLink } from 'react-icons/ai';
import { InfoItem } from './InfoItem';

export const Item = (props) => {
  const {
    title,
    link,
    duration,
    album: { cover_big, title: albumTitle, cover_small },
    rank,
    artist: { name: artistName, id: artistId, picture_small: artistPicture },
    preview: musicPreview,
  } = props;

  return (
    <div className='flex flex-col items-center w-5/6 h-auto m-auto mt-5 bg-white shadow-lg shadow-slate-900 rounded-3xl'>
      <div className='relative flex flex-col items-center w-full'>
        <AiOutlineLink
          size='35'
          className='absolute z-50 p-1 text-white bg-black rounded-full opacity-80 hover:opacity-100 -top-2 -right-2 '
          onClick={() => window.open(link)}
        />

        <img src={cover_big} alt='' className='w-full h-full rounded-t-3xl' />
        <div className='absolute bottom-0 w-full h-1/5 bg-gradient-to-b from-transparent to-black opacity-90' />

        <div className='absolute bottom-0 flex justify-between w-full text-white'>
          <div className='mr-5'>
            <p>{title}</p>
            <p className=''>{duration}</p>
          </div>
        </div>
      </div>

      <InfoItem
        albumTitle={albumTitle}
        cover_small={cover_small}
        rank={rank}
        artistName={artistName}
        artistId={artistId}
        artistPicture={artistPicture}
        musicPreview={musicPreview}
      />
    </div>
  );
};
