import { useSearchValues } from '../hooks/useSearchValues';

export const SearchBar = () => {
  const { value, handleChange } = useSearchValues();

  return (
    <>
      <div className='flex items-center justify-center w-full'>
        <input type='text' className='search' placeholder='Search for a todo' onChange={handleChange} value={value} />
      </div>
    </>
  );
};
