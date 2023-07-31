import createTask from '../components/createTask.js';
import dom from '../dom.js';

const addTaskHandler = (e) => {
  const taskText = dom.taskInput.value;
  const input = dom.taskInput;
  if (taskText) {
    createTask(taskText);
  }
  input.value = '';
};

export default addTaskHandler;
