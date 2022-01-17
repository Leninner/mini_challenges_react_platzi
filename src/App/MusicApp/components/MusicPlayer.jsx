import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { BiVolumeMute } from 'react-icons/bi';

export const MusicPlayer = () => {
  const SIZE = '35';

  return (
    <section className='fixed bottom-0 z-50 flex flex-col items-center justify-center w-full h-20 lg:h-16 lg:flex-row lg:items-center lg:justify-evenly bg-gray-dark'>
      <div className='flex mb-2 font-bold text-white'>
        <h1>Perfect - Ed Sheeran</h1>
      </div>

      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center justify-center w-1/2 h-full'>
          <div className='flex items-center justify-center w-full h-full'>
            <BsPauseFill className='text-white' size={SIZE} />
          </div>
        </div>
        <div className='flex items-center justify-center w-1/2 h-full'>
          <div className='flex items-center justify-center w-full h-full'>
            <BsPlayFill className='text-white' size={SIZE} />
          </div>
        </div>
        <div className='flex items-center justify-center w-1/2 h-full'>
          <div className='flex items-center justify-center w-full h-full'>
            <BiVolumeMute className='text-white' size='30' />
          </div>
        </div>
      </div>
    </section>
  );
};
