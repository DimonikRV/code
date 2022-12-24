import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTaskList } from './gateway.js';

document.addEventListener('DOMContentLoaded', () => {
  getTaskList().then(() => {
    renderTasks();
  });
  initTodoListHandlers();
});

// Get information from server
// Renderind
// Init Hendlers
