const editTaskHandler = (e) => {
  const taskEl = e.target;
  const parent = taskEl.parentElement;
  const btnElClassName = parent.classList;

  const li = taskEl.closest('li');

  if (btnElClassName.contains('edit-btn-task')) {
    if (li) {
      console.log('Edit');
    }
  }
};

export default editTaskHandler;
