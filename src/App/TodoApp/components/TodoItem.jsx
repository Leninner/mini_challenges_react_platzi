import { AiOutlineClose } from 'react-icons/ai';
import { ImStack } from 'react-icons/im';

export const TodoItem = ({ title = 'Comer rico', description = 'Vamos a cocinar esto y te va a gustar' }) => {
  const date = new Date();

  return (
    <>
      <div className='TodoItem'>
        <h1 className='text-xl font-bold '>{title}</h1>
        <p className='mb-1 '>{description}</p>
        <span className='text-sm hover:text-slate-800'>{date.toDateString()}</span>
        <figure className='absolute p-1 duration-300 bg-white border-2 rounded-full -left-3 text-slate-800 border-slate-800 -top-3 hover:bg-slate-800 hover:text-white'>
          <AiOutlineClose size='20' />
        </figure>
        <figure className='absolute p-1 text-white duration-300 border-2 rounded-full -right-3 border-slate-800 bg-slate-800 -top-3 hover:bg-white hover:text-slate-800'>
          <ImStack size='20' />
        </figure>
      </div>
    </>
  );
};
