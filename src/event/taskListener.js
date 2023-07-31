import deleteTaskHandler '../handler/deleteTaskHandler.js'

document.addEventListener('DOMContentLoaded', () => {
    const taskContainer = document.querySelector('.task-container');
    if (taskContainer) {
      taskContainer.addEventListener('click', (e) => {
        deleteTaskHandler(e);
      });
    }
  });

export default taskListener;
