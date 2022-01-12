import { TodoItem } from './TodoItem';
import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodoAppContext);

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((value, index) => (
        <TodoItem key={index} {...value} index={index} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
};
