import createTask from '../components/createTask.js';
import dom from '../dom.js';

const addTaskHandler = () => {
  const taskText = dom.taskInput.value;
  console.log(taskText);
  createTask(taskText);
};

export default addTaskHandler;
