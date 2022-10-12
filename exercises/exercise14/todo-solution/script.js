const tasksUL = document.getElementById("tasksList");
const taskInput = document.getElementById("taskInput");
const taskAddBtn = document.getElementById("taskAdd");
const notif = document.getElementById("notification");
const searchInput = document.getElementById("searchInput");
const addTaskHandler = (e) => {
  console.log(e.type, e.keyCode);
  if (e.type === "keyup") {
    if (e.keyCode !== 13) {
      return;
    }
  }
  const description = taskInput.value;
  if (description !== "") {
    const taskLI = document.createElement("li");
    const taskInner = `
      ${description}
      <button class="delete" onclick="removeTaskHandler(event)">✖</button>
    `;
    taskLI.innerHTML = taskInner;
    tasksUL.append(taskLI);
    taskInput.value = "";
  }
  checkEmpty();
};
const removeTaskHandler = (e) => {
  e.target.parentElement.remove();
  checkEmpty();
};
const checkEmpty = () => {
  const allTasks = tasksUL.querySelectorAll("li");
  if (allTasks.length === 0) {
    notif.style.display = "block";
    notif.innerHTML = "Sorry, your task list is empty.";
  } else {
    notif.style.display = "none";
  }
};
checkEmpty();
const searchHandler = (e) => {
  console.log("Test");
  const allTasks = tasksUL.querySelectorAll("li");
  allTasks.forEach((item) => {
    if (item.innerHTML.search(searchInput.value) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
};
searchInput.addEventListener("keyup", searchHandler);
taskAddBtn.addEventListener("click", addTaskHandler);
taskInput.addEventListener("keyup", addTaskHandler);
