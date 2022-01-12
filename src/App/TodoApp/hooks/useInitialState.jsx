import { useState } from 'react';

export const useUserValues = () => {
  const [userInfo, setUserInfo] = useState({});
  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
  };

  console.log(todos);

  return { userInfo, handleChange, handleSubmit, show, todos, setTodos };
};
