import deleteTaskHandler from '../handler/deleteTaskHandler.js';

const deleteTaskListener = (e) => {
  document.addEventListener('DOMContentLoaded', () => {
    const btnDelete = document.querySelector('.delete-btn-task');
    if (btnDelete) {
      btn.addEventListener('click', (e) => {
        deleteTaskHandler(e);
      });
    }
  });
};

export default deleteTaskListener;
