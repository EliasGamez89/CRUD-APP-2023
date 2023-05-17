const tasks = [];

const addButton = document.getElementById("add");
addButton.addEventListener("click", function () {
  const tareaInput = document.getElementById("tareaInput").value;
  const descriptionInput = document.getElementById("descriptionInput").value;

  if (tasks.some(task => task.name === tareaInput)) {
    alert("Task already exists!");
    return;
  }

  tasks.push({ name: tareaInput, description: descriptionInput });

  const tareaDiv = document.createElement("div");
  const taskName = document.createElement("h3");
  taskName.textContent = tareaInput;
  const taskDescription = document.createElement("p");
  taskDescription.textContent = descriptionInput;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  tareaDiv.appendChild(taskName);
  tareaDiv.appendChild(taskDescription);
  tareaDiv.appendChild(editButton);
  tareaDiv.appendChild(deleteButton);

  document.body.appendChild(tareaDiv);

  const notareaDiv = document.getElementById("notarea");
  notareaDiv.style.display = "none";

  editButton.addEventListener("click", function () {
    const currentTaskName = taskName.textContent;

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = currentTaskName;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    taskName.textContent = "";
    taskName.appendChild(taskInput);
    taskName.appendChild(saveButton);

    saveButton.addEventListener("click", function () {
      const newTareaInput = taskInput.value.trim();
      if (newTareaInput === "") {
        alert("Task name cannot be empty!");
        return;
      }
      if (tasks.some(task => task.name === newTareaInput)) {
        alert("Task already exists!");
        return;
      }

      const taskIndex = tasks.findIndex(task => task.name === currentTaskName);
      tasks[taskIndex].name = newTareaInput;
      taskName.textContent = newTareaInput;
    });
  });

  deleteButton.addEventListener("click", function () {
    const taskIndex = tasks.findIndex(task => task.name === tareaInput);
    tasks.splice(taskIndex, 1);
    tareaDiv.remove();
  });
});
