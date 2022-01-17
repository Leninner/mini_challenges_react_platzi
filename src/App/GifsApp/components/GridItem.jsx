import { useNearScreen } from '../../useNearScreen';

export const GridItem = ({ id, title, url, rating }) => {
  const [show, elementRef] = useNearScreen();

  return (
    <div className='w-5/6 p-2 m-auto mt-5 text-center bg-gray-200 rounded' ref={elementRef}>
      {show && (
        <>
          <img src={url} alt={id} className='w-full' />
          <h1 className='m-2 text-xl'>{title}</h1>
          <span className='px-4 m-2 text-white rounded-md shadow-md text-bold bg-cyan-500 shadow-cyan-500/50'>
            {rating}
          </span>
        </>
      )}
    </div>
  );
};
