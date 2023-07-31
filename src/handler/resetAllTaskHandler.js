import dom from '../dom.js';

const resetAllTaskHandler = (e) => {
  const ulEl = dom.ulList;
  ulEl.innerHTML = '';
};

export default resetAllTaskHandler;
