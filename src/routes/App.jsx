import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GifsApp } from '../App/GifsApp';
import { MusicApp } from '../App/MusicApp';
import { TodoApp } from '../App/TodoApp';
import { Home } from '../App';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gifs' element={<GifsApp />} />
        <Route path='/music' element={<MusicApp />} />
        <Route path='todo' element={<TodoApp />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
