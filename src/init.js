import './event/taskInputListener.js';
// import './event/deleteTaskListener.js';
import taskListener from './event/taskListener.js';
import editTaskHandler from './handler/editTaskHandler.js';
import deleteTaskHandler from './handler/deleteTaskHandler.js';

taskListener(editTaskHandler);
taskListener(deleteTaskHandler);
