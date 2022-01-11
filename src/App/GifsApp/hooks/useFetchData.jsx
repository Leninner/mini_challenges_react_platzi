import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (search = 'gatitos') => {
  const [datos, setDatos] = useState({ datos: [], loading: true });

  const API_KEY = 'D6gVdyaY26uP8M2Ibq0PcVsjWqJnkK8Z';

  useEffect(() => {
    const fetchData = async () => {
      setDatos({ ...datos, loading: true });
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(search)}&limit=10`
      );

      return response;
    };

    fetchData()
      .then(({ data: { data } }) => setDatos({ datos: data, loading: false }))
      .catch((error) => {
        setDatos({ ...datos, error: true, loading: false });
      });
  }, [search]);

  return datos;
};
