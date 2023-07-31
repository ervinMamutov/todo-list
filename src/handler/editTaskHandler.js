import dom from '../dom.js';

const editTaskHandler = (e) => {
  const targetEl = e.target;
  const buttonEl = targetEl.parentElement;
  const inputEl = buttonEl.previousElementSibling;
  inputEl.focus();
  console.log(buttonEl.previousElementSibling);
};

export default editTaskHandler;
