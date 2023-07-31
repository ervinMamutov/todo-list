const createTask = (taskText) => {
  //create li
  const liEl = document.createElement('li');
  const inputEl = document.createElement('input');
  inputEl.id = 'userTaskInput';
  inputEl.value = taskText;
  liEl.appendChild(inputEl);

  // create button edit task
  const buttonEditTask = document.createElement('button');
  buttonEditTask.classList.add('edit-btn-task');
  buttonEditTask.innerHTML = '<i class="fas fa-edit"></i>';
  buttonEditTask.id = 'edit-task';

  // create button delete task
  const buttonRemoveTask = document.createElement('button');
  buttonRemoveTask.classList.add('delete-btn-task');
  buttonRemoveTask.innerHTML = '<i class="fas fa-trash-alt"></i>';
  buttonRemoveTask.id = 'remove-task';

  liEl.append(buttonEditTask, buttonRemoveTask);

  return liEl;
};

export default createTask;
