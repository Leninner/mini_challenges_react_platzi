export const InfoItem = ({ albumTitle, cover_small, rank, artistName, artistId, artistPicture, musicPreview }) => {
  return (
    <div className='w-full p-2 px-5 rounded-b-3xl'>
      <audio preload='none' controls className='w-full mb-2 rounded-full' src={musicPreview} loop></audio>

      <div className='flex items-center justify-between'>
        <p className='text-xl font-bold w-60 md:w-full'>{artistName}</p>
        <img src={artistPicture} alt={artistName} className='w-10 rounded-full' />
      </div>

      <span className='font-medium text-gray-500'>
        Rank: <span className='font-bold text-blue-sky'>{rank}</span>
      </span>

      <div className='flex items-center justify-between'>
        <p className='font-medium text-gray-500 w-60 lg:w-9/12'>
          Album: <span className='font-bold text-red-500'>{albumTitle}</span>
        </p>
        <a href={`https://www.deezer.com/artist/${artistId}`} target='_blank' rel='noreferrer'>
          <img src={cover_small} alt='' className='w-10 border rounded-full border-slate-400' />
        </a>
      </div>
    </div>
  );
};
