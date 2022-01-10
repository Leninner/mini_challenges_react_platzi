import { Link } from 'react-router-dom';

export const Home = () => {
  const year = new Date().getFullYear();

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen cursor-default bg-slate-800'>
      <h1 className='flex flex-col mb-4 text-4xl font-bold text-white sm:block'>
        Welcome to the <span className='text-6xl text-red-500'>Mini Challenges</span>
      </h1>
      <p className='m-2 mb-8 text-xl text-gray-300 animate-pulse'>
        This is a good way for <span className='font-bold'>increase</span> my code skills
      </p>
      <div className='flex'>
        <Link to='/gifs'>
          <button className='button button-blue'>Gif App</button>
        </Link>
        <Link to='/todo'>
          <button className='bg-white button text-blue-sky hover:text-white hover:bg-blue-sky'>Todo App</button>
        </Link>

        <Link to='/music'>
          <button className='button button-blue'>Music App</button>
        </Link>
      </div>
      <span className='absolute bottom-0 float-right text-slate-400'>@Leninner | {year}</span>
    </div>
  );
};
