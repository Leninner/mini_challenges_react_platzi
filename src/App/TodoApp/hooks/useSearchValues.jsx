import { useState } from 'react';

export const useSearchValues = () => {
  const [value, setValue] = useState('');

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [todoInfo, setTodoInfo] = useState({});

  return { value, handleChange, showForm, setShowForm, todoInfo, setTodoInfo };
};
