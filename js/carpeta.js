const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Cargar tareas desde localStorage
window.onload = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const completed = localStorage.getItem(key) === '1';
    createTaskElement(key, completed);
  }
};

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  if (!localStorage.getItem(taskText)) {
    localStorage.setItem(taskText, '0');
    createTaskElement(taskText, false);
  }

  taskInput.value = '';
}

function createTaskElement(text, completed) {
  const li = document.createElement('li');
  li.textContent = text;
  if (completed) li.classList.add('completed');

  li.onclick = () => {
    li.classList.toggle('completed');
    localStorage.setItem(text, li.classList.contains('completed') ? '1' : '0');
  };

  taskList.appendChild(li);
}