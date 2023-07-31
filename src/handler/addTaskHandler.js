import createTask from '../components/createTask.js';
import dom from '../dom.js';

const addTaskHandler = (e) => {
  const ulEl = dom.ulList;
  const taskText = dom.taskInput.value;
  const input = dom.taskInput;

  if (taskText) {
    ulEl.append(createTask(taskText));
  }
  input.value = '';
};

export default addTaskHandler;
