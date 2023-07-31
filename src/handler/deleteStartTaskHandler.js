import dom from '../dom.js';

const deleteStartHandler = (e) => {
  console.log('YEs');

  const input = dom.taskInput;
  console.log(input);

  input.value = '';
};

export default deleteStartHandler;
