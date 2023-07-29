const deleteTaskHandler = (e) => {
  const taskItem = e.target;
  const li = taskItem.closest('li');

  if (li) {
    // remove task item from the DOM

    li.remove();
  }
};

export default deleteTaskHandler;
