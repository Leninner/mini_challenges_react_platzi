import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 11, 8, 9];

  return (
    <div>
      {array.map((value) => (
        <TodoItem key={value} />
      ))}
    </div>
  );
};
