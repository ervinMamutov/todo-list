const resetAllHandler = (e) => {
  console.log('yes');
  // const taskEl = e.target;
  // const parent = taskEl.parentEl;
  // console.log(taskEl);

  const taskContainer = document.querySelector('.task-container');
  // const ulEl = document.querySelector('#list');

  // console.log(taskContainer);

  taskContainer.remove();
};

export default resetAllHandler;
