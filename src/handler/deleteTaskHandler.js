const deleteTaskHandler = (e) => {
  const targetEl = e.target;
  const buttonEl = targetEl.parentElement;
  const inputEl = buttonEl.parentElement;
  inputEl.remove();
};

export default deleteTaskHandler;
