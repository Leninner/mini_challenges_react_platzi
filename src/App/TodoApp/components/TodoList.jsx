import { TodoItem } from './TodoItem';
import { useContext } from 'react';
import { TodoAppContext } from '../context';

export const TodoList = () => {
  const { todos } = useContext(TodoAppContext);

  return (
    <div>
      {todos.map((value, index) => (
        <TodoItem key={index} {...value} />
      ))}
    </div>
  );
};
