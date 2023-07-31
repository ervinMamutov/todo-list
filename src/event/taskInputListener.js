import dom from '../dom.js';
import addTaskHandler from '../handler/addTaskHandler.js';

const taskInputListener = () => {
  dom.taskButton.addEventListener('click', (e) => {
    addTaskHandler(e);
  });
};

export default taskInputListener;
