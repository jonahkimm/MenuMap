import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = (endpoint, query) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://local-business-data.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': '27ca2f53e9mshc35318f0fa15d23p16a38ejsn0526f1292bb8',
      'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useSearch;