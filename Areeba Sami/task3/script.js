function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    if (editBtn.innerText === "Edit") {
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.innerText;
      li.insertBefore(input, span);
      li.removeChild(span);
      editBtn.innerText = "Save";
    } else {
      const input = li.querySelector("input");
      span.innerText = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      editBtn.innerText = "Edit";
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonsDiv);
  taskList.appendChild(li);

  taskInput.value = "";
}
