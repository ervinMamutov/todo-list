import dom from '../dom.js';

const resetAllHandler = (e) => {
  const ulEl = dom.ulList;
  ulEl.innerHTML = '';
};

export default resetAllHandler;
