import dom from '../dom.js';
import addTaskHandler from '../handler/addTaskHandler.js';

const taskInputEnterListener = () => {
  const taskInput = dom.taskInput;
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTaskHandler(e);
    }
  });
};

export default taskInputEnterListener;
