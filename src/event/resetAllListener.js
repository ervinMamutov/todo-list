import dom from '../dom.js';
import resetAllTaskHandler from '../handler/resetAllTaskHandler.js';

const resetAllTaskListener = () => {
  const btnResetAll = dom.resetAllButton;

  btnResetAll.addEventListener('click', (e) => {
    resetAllTaskHandler(e);
  });
};

export default resetAllTaskListener;
