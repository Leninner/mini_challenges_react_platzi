import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (search) => {
  const [datos, setDatos] = useState({ datos: [], loading: true });
  const fetchData = async () => {
    setDatos({ ...datos, loading: true });
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(search)}&limit=10`
    );

    return response;
  };

  const API_KEY = 'D6gVdyaY26uP8M2Ibq0PcVsjWqJnkK8Z';

  useEffect(() => {
    if (sessionStorage.getItem(search)) {
      setDatos({
        datos: JSON.parse(sessionStorage.getItem(search)),
        loading: false,
      });
    } else {
      fetchData()
        .then(({ data: { data } }) => {
          setDatos({ datos: data, loading: false });
          sessionStorage.setItem(search, JSON.stringify(data));
        })
        .catch((error) => {
          setDatos({ ...datos, error: true, loading: false });
        });
    }

    // eslint-disable-next-line
  }, [search]);

  return datos;
};
