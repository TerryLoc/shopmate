import { useEffect, useState } from 'react';

export const useFretch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setLoading(false);
        setData(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};
