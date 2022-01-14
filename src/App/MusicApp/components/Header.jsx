import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
    <header className='relative w-full h-60 md:h-60'>
      <img
        src='https://images.unsplash.com/photo-1560590053-465d3d493b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt=''
        className='object-cover w-full h-full contrast-200 brightness-50'
      />

      <SearchBar />
    </header>
  );
};
