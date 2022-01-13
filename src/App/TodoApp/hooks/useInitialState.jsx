import { useState } from 'react';

export const useUserValues = () => {
  const [userInfo, setUserInfo] = useState({});
  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchedTodos, setSearchedTodos] = useState([]);
  const [todoInfo, setTodoInfo] = useState({});
  const [value, setValue] = useState('');

  const handleChangeSearch = (e) => {
    setValue(e.target.value);
    setSearchedTodos(todos.filter((todo) => todo.title.includes(value)));
  };

  console.log(todos, searchedTodos);

  const handleChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return {
    userInfo,
    handleChangeSearch,
    handleSubmit,
    show,
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
