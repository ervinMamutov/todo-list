import './event/taskInputListener.js';
import './event/resetAllListener.js';
import './event/deleteStartTaskListener.js';
import taskListener from './event/taskListener.js';
import editTaskHandler from './handler/editTaskHandler.js';
import deleteTaskHandler from './handler/deleteTaskHandler.js';

taskListener(editTaskHandler);
taskListener(deleteTaskHandler);
