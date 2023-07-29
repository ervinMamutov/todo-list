import dom from '../dom.js';
import addTaskHandler from '../handler/addTaskHandler.js';

dom.taskButton.addEventListener('click', (e) => {
  addTaskHandler(e);
});
