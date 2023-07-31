import dom from '../dom.js';
import deleteStartTaskHandler from '../handler/deleteStartTaskHandler.js';

const deleteStartTaskListener = () => {
  dom.deleteStartTaskButton.addEventListener('click', (e) => {
    deleteStartTaskHandler(e);
  });
};

export default deleteStartTaskListener;
