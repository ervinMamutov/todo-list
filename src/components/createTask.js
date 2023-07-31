import editTaskHandler from '../handler/editTaskHandler.js';
import deleteTaskHandler from '../handler/deleteTaskHandler.js';

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
  buttonEditTask.addEventListener('click', (e) => {
    editTaskHandler(e);
  });

  // create button delete task
  const buttonDeleteTask = document.createElement('button');
  buttonDeleteTask.classList.add('delete-btn-task');
  buttonDeleteTask.innerHTML = '<i class="fas fa-trash-alt"></i>';
  buttonDeleteTask.id = 'remove-task';
  buttonDeleteTask.addEventListener('click', (e) => {
    deleteTaskHandler(e);
  });

  liEl.append(buttonEditTask, buttonDeleteTask);

  return liEl;
};

export default createTask;
