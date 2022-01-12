import { AiFillCloseCircle } from 'react-icons/ai';
import { ButtonAddTodo } from '../components/ButtonAddTodo';
import { useSearchValues } from '../hooks/useSearchValues';
import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const FormAddTodo = () => {
  const { todoInfo, setTodoInfo } = useSearchValues();
  const { todos, setTodos, showForm, setShowForm, isEditing, setIsEditing } = useContext(TodoAppContext);

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    setShowForm(false);
    setIsEditing({ ...isEditing, isEditing: false });
    setTodos([todoInfo, ...todos]);
    setTodoInfo({});
  };

  const handleSubmitEdit = (e, index) => {
    e.preventDefault();
    setIsEditing({ ...isEditing, isEditing: false });
    setShowForm(false);
    const newTodos = [...todos];
    newTodos[index] = todoInfo;
    setTodos([...newTodos]);
    setTodoInfo({});
  };

  const handleChange = (e) => {
    setTodoInfo({
      ...todoInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {(showForm || isEditing.isEditing) && (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center w-full h-screen bg-black bg-opacity-50 overscroll-none'>
          <form className='relative z-30 w-5/6 p-10 m-auto text-center bg-white border border-gray-400 rounded-lg md:w-1/2'>
            <div className='absolute top-0 right-0'>
              <AiFillCloseCircle
                className='text-3xl text-black duration-300 rounded-full hover:text-white hover:bg-black'
                onClick={() => {
                  setShowForm(false);
                  setIsEditing(false);
                }}
              />
            </div>
            <h1 className='text-4xl font-bold text-center'>Añadir Tarea</h1>
            <div>
              <input
                type='text'
                placeholder='Title of the task'
                name='title'
                className='mt-10 input'
                value={todoInfo.title || ''}
                onChange={handleChange}
              />

              <textarea
                name='description'
                className='resize-y input'
                placeholder='Description'
                value={todoInfo.description || ''}
                onChange={handleChange}
              />

              <input type='date' name='date' className='input' value={todoInfo.date || ''} onChange={handleChange} />
            </div>
            {isEditing.isEditing ? (
              <button className='mt-7 button button-blue' onClick={(e) => handleSubmitEdit(e, isEditing.index)}>
                Aceptar
              </button>
            ) : (
              <button className='mt-7 button button-blue' onClick={handleSubmitAdd}>
                Enviar
              </button>
            )}
          </form>
        </div>
      )}
      <ButtonAddTodo showForm={showForm} setShowForm={setShowForm} />
    </>
  );
};