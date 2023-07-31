const taskListener = (handler) => {
  document.addEventListener('DOMContentLoaded', () => {
    const taskContainer = document.querySelector('.task-container');
    if (taskContainer) {
      taskContainer.addEventListener('click', (e) => {
        handler(e);
      });
    }
  });
};

export default taskListener;
