import dom from '../dom.js';
import deleteStartHandler from '../handler/deleteStartTaskHandler.js';

dom.deleteStartTaskButton.addEventListener('click', (e) => {
  console.log('yes');
  deleteStartHandler(e);
});
