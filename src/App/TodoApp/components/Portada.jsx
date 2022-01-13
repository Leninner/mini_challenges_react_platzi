import { AiOutlineCheck } from 'react-icons/ai';
import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const Portada = () => {
  const { userInfo, handleChangeUserInfo, handleSubmit } = useContext(TodoAppContext);

  return (
    <>
      <section className='portada'>
        <form className='mt-10 text-center md:w-1/2' onSubmit={handleSubmit}>
          <h1 className='text-xl font-bold'>Please, provide your personal info</h1>

          <div className='relative flex flex-col'>
            <input
              type='text'
              placeholder='Name'
              className='input'
              name='name'
              value={userInfo.name || ''}
              onChange={handleChangeUserInfo}
            />

            <input
              type='text'
              placeholder='Last name'
              className='input'
              name='lastName'
              value={userInfo.lastName || ''}
              onChange={handleChangeUserInfo}
            />
          </div>

          <button className='flex justify-center w-5/6 py-1 m-auto mt-3 mb-3 duration-300 border-2 outline-none md:w-20 rounded-r-3xl rounded-l-3xl border-blue-sky hover:bg-blue-sky hover:text-white text-blue-sky'>
            <AiOutlineCheck size='30' />
          </button>
        </form>
      </section>
    </>
  );
};
