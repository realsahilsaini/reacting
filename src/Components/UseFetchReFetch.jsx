import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const useFetchReFetch = (url, interval = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    if (interval !== null) {
      
      const intervalId = setInterval(() => {
        console.log(interval);
        fetchData();
      }, interval);

      return () => clearInterval(intervalId);
    }
  }, [url, interval]);

  return { data, loading, error };
};

export default useFetchReFetch;