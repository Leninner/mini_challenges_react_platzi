import { Helmet } from 'react-helmet';
import { Header } from './components/Header';
import { ReturnToHome } from '../ReturnToHome';
import { MusicAppBody } from './containers/MusicAppBody';
import { MusicAppContext } from './context';
import { useInitialState } from './hooks/useInitialState';

export const MusicApp = () => {
  const initialState = useInitialState();

  return (
    <>
      <Helmet>
        <title>Music App 😉</title>
      </Helmet>
      <MusicAppContext.Provider value={initialState}>
        <Header />
        <MusicAppBody />
      </MusicAppContext.Provider>
      <ReturnToHome />
    </>
  );
};
