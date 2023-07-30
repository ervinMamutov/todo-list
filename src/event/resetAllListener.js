import dom from '../dom.js';
import resetAllHandler from '../handler/resetAllHandler.js';

const btnResetAll = dom.resetAllButton;

btnResetAll.addEventListener('click', (e) => {
  resetAllHandler(e);
});
