import { BsPauseFill } from 'react-icons/bs';
import { BiVolumeMute } from 'react-icons/bi';
import { MusicAppContext } from '../context';
import { useContext, useEffect } from 'react';

export const MusicPlayer = () => {
  const SIZE = '35';
  const { currentSong, audioRef, songData } = useContext(MusicAppContext);

  useEffect(() => {
    audioRef.current.src = songData[currentSong]?.preview;
    audioRef.current.loop = true;
    audioRef.current.autoplay = true;
  }, [currentSong, songData, audioRef]);

  const artistName = songData[currentSong]?.artist.name;
  const songTitle = songData[currentSong]?.title;
  const coverSmall = songData[currentSong]?.album.cover_small;

  const playSong = () => {
    audioRef.current.play();
  };

  const pauseSong = () => {
    audioRef.current.pause();
  };

  const muteSong = () => {
    audioRef.current.muted = !audioRef.current.muted;
  };

  const togglePlay = () => {
    if (audioRef.current.paused) {
      playSong();
    } else {
      pauseSong();
    }
  };

  return (
    <section className='fixed bottom-0 z-50 flex flex-col items-center justify-center w-full h-auto lg:py-2 lg:flex-row lg:items-center lg:justify-evenly bg-gray-dark'>
      <div className='relative flex items-center justify-between w-full px-5 pt-2 mb-2 font-bold text-white'>
        <h1 className='text-xl'>
          {songTitle} - {artistName}
        </h1>
        <img src={coverSmall} alt={songTitle} className={`lg:absolute w-10 rounded-full -right-5 animate-spin`} />
      </div>

      <div className='flex items-center justify-center w-full px-5 pt-2 mb-2 font-bold text-white lg:justify-end'>
        <BiVolumeMute className='mx-2 text-white' size='30' onClick={muteSong} />
        <BsPauseFill className='mx-2 text-white' size={SIZE} onClick={togglePlay} />
      </div>
    </section>
  );
};
