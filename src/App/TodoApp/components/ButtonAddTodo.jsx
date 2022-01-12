import { AiOutlinePlus } from 'react-icons/ai';

export const ButtonAddTodo = ({ showForm, setShowForm }) => {
  return (
    <div className='AddTodoButton'>
      <button onClick={() => setShowForm(!showForm)}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};
