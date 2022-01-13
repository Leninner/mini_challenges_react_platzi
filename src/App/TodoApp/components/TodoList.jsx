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

  const handleDeleteSearchedTodos = (value) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.title !== value);

    setTodos(filteredTodos);
  };

  return (
    <div>
      {!todos.length && (
        <p className='mt-20 feedback animate-pulse'>
          You don´t have any tasks yet <span className='text-2xl font-bold text-red-500 '>Add your task</span>
        </p>
      )}

      {valueSearch &&
        searchedTodos.map((value, index) => (
          <TodoItem key={index} {...value} index={index} onDelete={() => handleDeleteSearchedTodos(value.title)} />
        ))}

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
