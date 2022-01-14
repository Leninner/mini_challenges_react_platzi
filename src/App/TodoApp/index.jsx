import { Helmet } from 'react-helmet';
import { Portada } from './components/Portada';
import { ReturnToHome } from '../ReturnToHome';
import { TodoAppContext } from './context';
import { useUserValues } from './hooks/useInitialState';
import { Main } from './containers/Main';

export const TodoApp = () => {
  const initialUserValues = useUserValues();

  const { userInfo } = initialUserValues;

  return (
    <>
      <Helmet>
        <title>Todo App 😉</title>
      </Helmet>
      <header className='w-full py-16 text-center shadow-sm cursor-default shadow-black bg-slate-900'>
        <h1 className='text-2xl font-bold text-white md:text-5xl'>
          Manage your tasks <span className='text-red-500'>in one place</span>
        </h1>
      </header>
      <TodoAppContext.Provider value={initialUserValues}>{!userInfo ? <Portada /> : <Main />}</TodoAppContext.Provider>
      <ReturnToHome />
    </>
  );
};
