import deleteTaskHandler from '../handler/deleteTaskHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const deleteButton = document.querySelector('.task-container');
  if (deleteButton) {
    deleteButton.addEventListener('click', (e) => {
      deleteTaskHandler(e);
    });
  }
});
