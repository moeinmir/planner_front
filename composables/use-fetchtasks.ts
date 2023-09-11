import axios from 'axios';

export default function useFetchtasks() {
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tasks');
      return response.data;
    } catch (error) {
        return [];
    }
  };
  return {
    fetchTasks
  };
}

