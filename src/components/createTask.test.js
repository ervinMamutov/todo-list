/**
 * @jest-environment jsdom
 */
import createTask from './createTask.js';

describe('create a user component ', () => {
  const task = createTask('go to doctor');
  describe('check nodeName', () => {
    test('childrenCount -> 3', () => {
      expect(task.childElementCount).toEqual(3);
    });
    test('nodeName -> LI', () => {
      expect(task.nodeName).toEqual('LI');
    });
    test('task.children[0].nodeName -> INPUT', () => {
      expect(task.children[0].nodeName).toEqual('INPUT');
    });
    test('task.children[1].nodeName -> BUTTON', () => {
      expect(task.children[1].nodeName).toEqual('BUTTON');
    });
    test('task.children[2].nodeName -> BUTTON', () => {
      expect(task.children[2].nodeName).toEqual('BUTTON');
    });
  });
  describe('check first children', () => {
    test('task.children[0].value -> go to doctor', () => {
      expect(task.children[0].value).toEqual('go to doctor');
    });
    test('task.children[0].id -> userTaskInput', () => {
      expect(task.children[0].id).toEqual('userTaskInput');
    });
  });
  describe('check second children', () => {
    test('task.children[1].innerHTML -> <i class="fas fa-edit"></i>', () => {
      expect(task.children[1].innerHTML).toEqual('<i class="fas fa-edit"></i>');
    });
    test('task.children[1].id -> <i class="fas fa-edit"></i>', () => {
      expect(task.children[1].id).toEqual('edit-task');
    });
  });
  describe('check third children', () => {
    test('task.children[2].innerHTML -> <i class="fas fa-trash-alt"></i>', () => {
      expect(task.children[2].innerHTML).toEqual(
        '<i class="fas fa-trash-alt"></i>',
      );
    });
    test('task.children[2].id -> remove-task', () => {
      expect(task.children[2].id).toEqual('remove-task');
    });
  });
});
