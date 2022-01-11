import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';

export const ReturnToHome = () => {
  return (
    <Link to='/'>
      <div className='absolute p-5 duration-300 bg-white rounded-full -left-3 -top-3 hover:bg-blue-sky hover:text-white'>
        <BiHomeAlt size='30' />
      </div>
    </Link>
  );
};
