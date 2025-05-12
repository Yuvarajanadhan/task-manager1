function addTask() {
  const taskInput = document.getElementById('taskInput');
  const deadlineInput = document.getElementById('deadlineInput');
  const taskList = document.getElementById('taskList');

  const taskText = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (taskText === '' || deadline === '') {
    alert("Please enter a task and deadline.");
    return;
  }

  const li = document.createElement('li');
  li.className = 'task-item';

  li.innerHTML = `
    <div>
      <strong>${taskText}</strong><br>
      <small>Deadline: ${deadline}</small>
    </div>
    <div class="task-actions">
      <button class="done" onclick="markDone(this)">Done</button>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = '';
  deadlineInput.value = '';
}

function markDone(button) {
  const taskItem = button.closest('.task-item');
  taskItem.classList.toggle('completed');
}

function deleteTask(button) {
  const taskItem = button.closest('.task-item');
  taskItem.remove();
}
