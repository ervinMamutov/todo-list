const dom = {
  main: document.querySelector('main'),
  taskInput: document.getElementById('todo-task-add'),
  taskButton: document.getElementById('add-task'),
  deleteStartTaskButton: document.getElementById('delete-task'),
  resetAllButton: document.getElementById('btn-reset-all'),
  taskContainer: document.querySelector('.task-container'),
  ulList: document.querySelector('.list'),
};

export default dom;
