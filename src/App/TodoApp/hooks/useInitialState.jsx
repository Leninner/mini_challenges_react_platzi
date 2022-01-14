import { useEffect, useState } from 'react';

export const useUserValues = () => {
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchedTodos, setSearchedTodos] = useState([]);
  const [todoInfo, setTodoInfo] = useState({
    isCompleted: false,
  });
  const [value, setValue] = useState('');

  const handleChangeSearch = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setSearchedTodos(todos.filter((todo) => todo.title?.toLowerCase().includes(value.toLowerCase())));
  }, [value, todos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    searchedTodos,
    handleChangeSearch,
    todos,
    setTodos,
    showForm,
    setShowForm,
    isEditing,
    setIsEditing,
    valueSearch: value,
    todoInfo,
    setTodoInfo,
  };
};
