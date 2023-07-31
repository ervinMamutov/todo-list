import data from '../data.js';
import dom from '../dom.js';

const createTask = (taskText) => {
  const buttonIcon = data.icon;
  const ulEl = dom.ulList;

  //create li
  const liEl = document.createElement('li');
  const inputEl = document.createElement('input');
  inputEl.id = 'userTaskInput';
  inputEl.value = taskText;
  liEl.appendChild(inputEl);

  // create button edit task
  const buttonEditTask = document.createElement('button');
  buttonEditTask.classList.add('edit-btn-task');
  buttonEditTask.innerHTML = buttonIcon[0].iconHTML;
  buttonEditTask.id = buttonIcon[0].id;

  // create button delete task
  const buttonRemoveTask = document.createElement('button');
  buttonRemoveTask.classList.add('delete-btn-task');
  buttonRemoveTask.innerHTML = buttonIcon[1].iconHTML;
  buttonRemoveTask.id = buttonIcon[1].id;

  liEl.append(buttonEditTask, buttonRemoveTask);
  ulEl.append(liEl);

  return liEl;
};

export default createTask;
