import { AiOutlineCheck } from 'react-icons/ai';
import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const Portada = () => {
  const { userInfo, handleChange, handleSubmit, show } = useContext(TodoAppContext);

  return (
    <>
      <section className='portada'>
        <header className='w-screen py-16 text-center shadow-sm cursor-default shadow-black bg-slate-900'>
          <h1 className='text-2xl font-bold text-white md:text-5xl'>
            Manage your tasks <span className='text-red-500'>in one place</span>
          </h1>
        </header>

        {show && (
          <form className='mt-10 text-center md:w-1/2' onSubmit={handleSubmit}>
            <h1 className='text-xl'>Please, provide your personal info</h1>

            <div className='relative flex flex-col'>
              <input
                type='text'
                placeholder='Name'
                className='input'
                name='name'
                value={userInfo.name || ''}
                onChange={handleChange}
              />

              <input
                type='text'
                placeholder='Last name'
                className='input'
                name='lastName'
                value={userInfo.lastName || ''}
                onChange={handleChange}
              />
            </div>

            <button className='flex justify-center w-5/6 py-1 m-auto mt-3 mb-3 duration-300 border-2 outline-none md:w-20 rounded-r-3xl rounded-l-3xl border-blue-sky hover:bg-blue-sky hover:text-white text-blue-sky'>
              <AiOutlineCheck size='30' />
            </button>
          </form>
        )}
      </section>
    </>
  );
};
