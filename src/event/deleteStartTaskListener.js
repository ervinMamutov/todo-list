import dom from '../dom.js';
import deleteStartHandler from '../handler/deleteStartTaskHandler.js';

const deleteStartTaskListener = () => {
  dom.deleteStartTaskButton.addEventListener('click', (e) => {
    deleteStartHandler(e);
  });
};

export default deleteStartTaskListener;
