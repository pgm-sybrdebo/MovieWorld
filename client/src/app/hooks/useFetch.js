import { useEffect, useState } from 'react';


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError('There went something wrong, are you sure the API link is right?')
        }
        const data = await response.json();
        setData(data);
      } catch(error) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    }
  getData();
  }, [url])
  return [data, isLoading, error];
}

export default useFetch;