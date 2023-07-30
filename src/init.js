import './event/taskInputListener.js';
import taskListener from './event/taskListener.js';
import editTaskHandler from './handler/editTaskHandler.js';
import deleteTaskHandler from './handler/deleteTaskHandler.js';
// import resetAllHandler from './handler/resetAllHandler.js';
import './event/resetAllListener.js';

taskListener(editTaskHandler);
taskListener(deleteTaskHandler);
// taskListener(resetAllHandler);
