import { ImStack } from 'react-icons/im';
import { useState, useContext } from 'react';
import { FormAddTodo } from '../containers/FormAddTodo';
import { TodoAppContext } from '../context';

export const TodoItem = ({
  title = 'Comer rico',
  description = 'Vamos a cocinar esto y te va a gustar',
  date = new Date().toDateString(),
  isCompleted,
  onDelete,
  onComplete,
}) => {
  const [isOptions, setIsOptions] = useState(false);
  const { isEditing, setIsEditing } = useContext(TodoAppContext);

  const handleOptions = () => {
    setIsOptions(!isOptions);
  };

  const handleEdit = (value) => {
    setIsEditing({ isEditing: true, todo: { ...value } });
  };

  return (
    <>
      <div className={`${isCompleted && 'isComplete'} TodoItem`} onClick={handleOptions}>
        <h1 className='text-xl font-bold '>{title}</h1>
        <p className='mb-1 '>{description}</p>
        <span className='text-sm hover:text-slate-800'>{date}</span>

        <figure
          className='absolute z-50 p-1 text-white duration-300 border-2 rounded-full -right-3 border-slate-800 bg-slate-800 -top-3 hover:bg-white hover:text-slate-800'
          onClick={handleOptions}>
          <ImStack size='20' />
        </figure>

        {isOptions && (
          <div className='absolute top-0 right-0 flex items-center justify-end h-auto bg-white border-b border-l border-gray-500 w-wuto rounded-bl-3xl'>
            <nav>
              <ul className='flex flex-col items-end'>
                <li
                  className='w-5/6 m-2 text-sm font-bold border-b text-slate-800 hover:text-blue'
                  onClick={() =>
                    handleEdit({
                      title,
                      description,
                      date,
                    })
                  }>
                  Editar
                </li>
                {!isCompleted && (
                  <li
                    className='w-5/6 m-2 text-sm font-bold border-b text-slate-800 hover:text-green'
                    onClick={onComplete}>
                    Completado
                  </li>
                )}

                <li
                  className='w-5/6 m-2 text-sm font-bold border-b text-slate-800 hover:text-red-500'
                  onClick={onDelete}>
                  Eliminar
                </li>
              </ul>
            </nav>
          </div>
        )}
        {/* TODO */}

        {isEditing && <FormAddTodo />}
      </div>
    </>
  );
};
