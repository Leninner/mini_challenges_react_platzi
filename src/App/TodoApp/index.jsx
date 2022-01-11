import { Helmet } from 'react-helmet';
import { Portada } from './components/Portada';
import { ReturnToHome } from '../ReturnToHome';
import { TodoAppContext } from './context';
import { useUserValues } from './hooks/useUserValues';

export const TodoApp = () => {
  const initialUserValues = useUserValues();

  return (
    <>
      <Helmet>
        <title>Todo App 😉</title>
      </Helmet>
      <TodoAppContext.Provider value={initialUserValues}>
        <Portada />
      </TodoAppContext.Provider>
      <ReturnToHome />
    </>
  );
};
