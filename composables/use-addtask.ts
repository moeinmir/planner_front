import axios from 'axios';
import { TaskForm } from '~/interfaces/task-interface';
export default function useAddtask() {
  const tasks = useTasks();
  const {fetchTasks} = useFetchtasks()
  const addTask = async (taskForm: TaskForm) => {

    console.log("task form in the task form", taskForm)
    try {
      // Send a POST request to your Spring Boot backend
      const response = await axios.post(
        "http://localhost:8080/api/tasks",
        taskForm
      );
      tasks.value = await fetchTasks();
      return response.data;
    } catch (error) {
      return null;
    }
  };
  return {
    addTask
  };
}
