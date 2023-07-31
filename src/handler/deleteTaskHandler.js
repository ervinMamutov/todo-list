const deleteTaskHandler = (e) => {
  const taskEl = e.target;
  const parent = taskEl.parentElement;
  const btnElClassName = parent.classList;

  const li = taskEl.closest('li');

  if (btnElClassName.contains('delete-btn-task')) {
    if (li) {
      // remove task item from the DOM
      li.remove();
    }
  }
};

export default deleteTaskHandler;
