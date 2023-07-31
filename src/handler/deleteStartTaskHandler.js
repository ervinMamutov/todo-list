import dom from '../dom.js';

const deleteStartTaskHandler = (e) => {
  const input = dom.taskInput;
  input.value = '';
};

export default deleteStartTaskHandler;
