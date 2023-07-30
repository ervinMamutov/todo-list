const editTaskHandler = (e) => {
  const taskEl = e.target;
  const parent = taskEl.parentElement;
  const btnElClassName = parent.classList;
  const li = taskEl.closest('li');

  if (btnElClassName.contains('edit-btn-task')) {
    const input = li.querySelector('#userTaskInput');
    input.focus();
  }
};

export default editTaskHandler;
