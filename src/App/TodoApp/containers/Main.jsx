import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { TodoList } from '../components/TodoList';

export const Main = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <TodoList />
    </>
  );
};
