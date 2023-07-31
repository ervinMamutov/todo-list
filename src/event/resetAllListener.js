import dom from '../dom.js';
import resetAllTaskHandler from '../handler/resetAllTaskHandler.js';

const btnResetAll = dom.resetAllButton;

const resetAllTaskListener = () => {
  btnResetAll.addEventListener('click', (e) => {
    resetAllTaskHandler(e);
  });
};

export default resetAllTaskListener;
