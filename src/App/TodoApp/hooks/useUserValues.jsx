import { useState } from 'react';

export const useUserValues = () => {
  const [userInfo, setUserInfo] = useState({});
  const [show, setShow] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    setShow(false);
  };

  return { userInfo, handleChange, handleSubmit, show };
};
