import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const Header = () => {
  const date = new Date().toDateString();
  const { userInfo, todos } = useContext(TodoAppContext);

  const { name = 'Lenin' } = userInfo;

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <header className='relative flex items-center justify-between px-2 py-3 border-b-2 border-slate-300'>
      <div className='flex items-center text-slate-800'>
        <p className='ml-4 font-medium text-gray-800'>
          Hi {name}, {date}
        </p>
      </div>

      <p className='text-gray-600  md:absolute md:left-1/2'>
        <span className='font-medium'>{todos.length ? `${completedTodos}/${todos.length} tasks` : '0 tasks'}</span>
      </p>

      <img
        src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        alt=''
        className='object-cover rounded-full w-11 h-11'
      />
    </header>
  );
};
