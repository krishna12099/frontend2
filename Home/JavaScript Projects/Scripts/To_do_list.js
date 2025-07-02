// Load tasks on page load
window.onload = function () {
  loadTasks();
};

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const task = {
    text: taskText,
    completed: false
  };

  saveTask(task);
  displayTask(task);
  taskInput.value = "";
}

// Save to localStorage
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(displayTask);
}

// Display a single task
function displayTask(task) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  const span = document.createElement("span");
  span.textContent = task.text;
  if (task.completed) span.style.textDecoration = "line-through";

  checkbox.onchange = function () {
    task.completed = checkbox.checked;
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    updateStorage();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    li.remove();
    deleteTask(task.text);
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
}

// Update localStorage after checkbox toggle
function updateStorage() {
  const listItems = document.querySelectorAll("#taskList li");
  const updatedTasks = [];

  listItems.forEach(li => {
    const checkbox = li.querySelector("input[type=checkbox]");
    const span = li.querySelector("span");
    updatedTasks.push({
      text: span.textContent,
      completed: checkbox.checked
    });
  });

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Delete a task
function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
