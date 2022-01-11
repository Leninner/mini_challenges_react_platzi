import { useState } from 'react';

export const useSearchValues = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);

  return { value, handleChange };
};
