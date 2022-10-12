const taskAddBtn = document.getElementById("taskAdd");
const taskInput = document.getElementById("taskInput");
const myUl = document.getElementById("tasksList");
const notif = document.getElementById("notification");
const addTaskHandler = (event) => {
  const taskDescription = taskInput.value;
  if (taskDescription) {
    console.log("you want to add a task");
    const taskLI = document.createElement("li");
    const taskLI_inner = `
      ${taskDescription}
      <button class="delete" onclick="removeTaskHandler(event)">✖</button>
    `;
    taskLI.innerHTML = taskLI_inner;
    myUl.appendChild(taskLI);
    taskInput.value = "";
  }
  notifHandler();
};
taskAddBtn.addEventListener("click", addTaskHandler);
const removeTaskHandler = (event) => {
  event.target.parentElement.remove();
  notifHandler();
};

const notifHandler = () => {
  const allTasks = document.querySelectorAll("#tasksList li");
  if (allTasks.length === 0) {
    notif.style.display = "block";
  } else {
    notif.style.display = "none";
  }
};

taskInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addTaskHandler();
  }
});
