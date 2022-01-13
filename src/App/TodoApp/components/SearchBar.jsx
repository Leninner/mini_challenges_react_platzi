import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const SearchBar = () => {
  const { valueSearch, handleChangeSearch } = useContext(TodoAppContext);

  return (
    <>
      <div className='flex items-center justify-center w-full'>
        <input
          type='text'
          className='search'
          placeholder='Search for a todo'
          onChange={handleChangeSearch}
          value={valueSearch || ''}
        />
      </div>
    </>
  );
};
