import { TodoItem } from './TodoItem';
import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const TodoList = () => {
  const { todos, setTodos, searchedTodos, valueSearch } = useContext(TodoAppContext);

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      {!todos.length && (
        <p className='mt-20 feedback animate-pulse'>
          No tienes tareas por hacer <span className='text-2xl font-bold text-red-500 '>añade tu primera tarea</span>
        </p>
      )}

      {valueSearch && searchedTodos.map((value, index) => <TodoItem key={index} {...value} index={index} />)}

      {!searchedTodos.length && valueSearch.length ? (
        <p className='feedback'>
          No se encuentran coincidencias para <span className='text-3xl font-bold text-red-500'>{valueSearch}</span>
        </p>
      ) : null}

      {!valueSearch && todos.length
        ? todos.map((value, index) => (
            <TodoItem key={index} {...value} index={index} onDelete={() => handleDelete(index)} />
          ))
        : null}
    </div>
  );
};
