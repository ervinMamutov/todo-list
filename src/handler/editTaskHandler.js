import dom from '../dom.js';

const editTaskHandler = (e) => {
  const targetEl = e.target;
  const buttonEl = targetEl.parentElement;
  const inputEl = buttonEl.parentElement.querySelector('#userTaskInput');
  inputEl.focus();
};

export default editTaskHandler;
