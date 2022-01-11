import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const Header = () => {
  const date = new Date().toDateString();
  const { userInfo } = useContext(TodoAppContext);

  const { name = 'Lenin' } = userInfo;

  return (
    <header className='flex items-center justify-between px-2 py-3 border-b-2 border-slate-300'>
      <div className='flex items-center text-slate-800'>
        <HiOutlineMenuAlt2 size='32' />
        <p className='ml-4 font-medium text-gray-800'>
          Hi {name}, {date}
        </p>
      </div>

      <img
        src='https://images.generated.photos/GlXfLN0CLeUvrMkxZ8bOUoaiUb_q6xXAr4uqCS_Tbcw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMzA5ZmYx/YzYtMjJlNi00NTJm/LWJlOWEtNDlkYzVj/ZDdiNjU5LmpwZw.jpg'
        alt=''
        className='w-10 rounded-full'
      />
    </header>
  );
};
