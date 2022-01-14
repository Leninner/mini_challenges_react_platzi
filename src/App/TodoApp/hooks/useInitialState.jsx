import { useEffect, useState } from 'react';

export const useUserValues = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : {};
  });
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

  const handleChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  useEffect(() => {
    setSearchedTodos(todos.filter((todo) => todo.title?.toLowerCase().includes(value.toLowerCase())));
  }, [value, todos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  return {
    searchedTodos,
    userInfo,
    handleChangeSearch,
    handleSubmit,
    todos,
    setTodos,
    showForm,
    setShowForm,
    isEditing,
    setIsEditing,
    valueSearch: value,
    handleChangeUserInfo,
    todoInfo,
    setTodoInfo,
  };
};
