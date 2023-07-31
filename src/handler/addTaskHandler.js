import createTask from '../components/createTask.js';
import dom from '../dom.js';

const addTaskHandler = (e) => {
  const taskText = dom.taskInput.value;
  if (taskText) {
    createTask(taskText);
  }
};

export default addTaskHandler;
