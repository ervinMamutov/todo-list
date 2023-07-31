import editTaskHandler from '../handler/editTaskHandler.js';

const editTaskListener = () => {
  debugger;

  const btnEdit = document.querySelector('.edit-btn-task');
  if (btnEdit) {
    btnEdit.addEventListener('click', (e) => {
      console.log(btnEdit);
      editTaskHandler(e);
    });
  }
  /* 
  document.addEventListener('DOMContentLoaded', () => {
    const btnEdit = document.querySelector('.edit-btn-task');
    if (btnEdit) {
      btnEdit.addEventListener('click', (e) => {
        console.log(btnEdit);
        editTaskHandler(e);
      });
    }
  }); */
};

export default editTaskListener;
