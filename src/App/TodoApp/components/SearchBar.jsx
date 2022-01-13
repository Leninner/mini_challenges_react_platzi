import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const SearchBar = () => {
  const { valueSearch, handleChangeSearch, todos } = useContext(TodoAppContext);

  return (
    <>
      <div className='flex items-center justify-center w-full'>
        <input
          type='text'
          className='search disabled:bg-gray-400 disabled:placeholder:text-gray-100'
          placeholder='Search for a todo'
          onChange={handleChangeSearch}
          value={valueSearch || ''}
          disabled={todos.length ? false : true}
        />
      </div>
    </>
  );
};
