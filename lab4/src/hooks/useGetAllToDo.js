import { useState, useEffect } from 'react';

const useGetAllToDo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { isLoading, data };
};

export default useGetAllToDo;
