window.addEventListener("load", () => {
  const form = document.querySelector("#head-input");
  const taskInput = document.querySelector("#task-input1");
  const taskListEl = document.querySelector(".task-lists");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    task = taskInput.value;

    if (!task) {
      alert("Please fill in a task");
      return;
    }

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const listInput = document.createElement("input");
    listInput.classList.add("input");
    listInput.type = "text";
    listInput.value = task;
    listInput.setAttribute("readonly", "readonly");

    actions.appendChild(listInput);
    taskListEl.appendChild(actions);

    const editEl = document.createElement("button");
    editEl.classList.add("edit");
    editEl.innerHTML = "EDIT";

    const deleteEl = document.createElement("button");
    deleteEl.classList.add("delete");
    deleteEl.innerHTML = "DELETE";

    actions.appendChild(editEl);
    actions.appendChild(deleteEl);

    taskInput.value = "";

    editEl.addEventListener("click", function () {
      if (editEl.innerHTML.toLocaleLowerCase() == "edit") {
        listInput.focus();
        listInput.removeAttribute("readonly", "readonly");
        editEl.innerHTML = "SAVE";
      } else {
        editEl.innerHTML = "EDIT";
        listInput.setAttribute("readonly", "readonly");
      }
    });

    deleteEl.addEventListener("click", () => {
      taskListEl.removeChild(actions);
    });
  });
});
