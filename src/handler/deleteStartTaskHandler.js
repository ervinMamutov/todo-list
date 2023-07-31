import dom from '../dom.js';

const deleteStartHandler = (e) => {
  const input = dom.taskInput;
  input.value = '';
};

export default deleteStartHandler;
