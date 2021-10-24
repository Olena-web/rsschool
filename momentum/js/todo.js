"use strict";

const todoBtn = document.querySelector(".todo-icon");
const todoBlock = document.querySelector(".container-todo");
todoBtn.addEventListener("click", () => {
  todoBlock.classList.toggle("visible");
});
// Vanila JavaScript todo list app
const taskInput = document.getElementById("new-task"); // New-task
const addButton = document.getElementsByTagName("button")[5]; // First button
const incompleteTasksHolder = document.getElementById("incomplete-tasks"); // Incomplete-tasks
const completedTasksHolder = document.getElementById("completed-tasks"); // Completed-tasks
const createNewTaskElement = function (taskString) {
  // New Task List Item
  const listItem = document.createElement("li"); // Create List Item
  const checkBox = document.createElement("input"); // Input (checkbox)
  const label = document.createElement("label"); // Label
  const editInput = document.createElement("input"); // Input (text)
  const editButton = document.createElement("button"); // Button.edit
  const deleteButton = document.createElement("button"); // Button.delete

  checkBox.type = "checkbox"; // Each element needs to be modified
  editInput.type = "text"; //
  editButton.innerText = "Edit"; //
  editButton.className = "edit"; //
  deleteButton.innerText = "Delete"; //
  deleteButton.className = "delete"; //
  label.innerText = taskString; //

  listItem.appendChild(checkBox); // Each element needs to be appended
  listItem.appendChild(label); //
  listItem.appendChild(editInput); //
  listItem.appendChild(editButton); //
  listItem.appendChild(deleteButton); //

  return listItem;
};

const addTask = function () {
  // Add a new task
  var listItemName = taskInput.value || "New Item"; // We hold the current value or provide the default one
  var listItem = createNewTaskElement(listItemName); // Create a new list item with the text from #new-task
  incompleteTasksHolder.appendChild(listItem); // Append listItem to incompleteTasksHolder
  bindTaskEvents(listItem, taskCompleted); // We bind it to the incomplete holder
  taskInput.value = ""; // Resets the field
};

const editTask = function () {
  // Edit an existing task
  var listItem = this.parentNode; // Create List Item
  var editInput = listItem.querySelector("input[type=text"); // Input (text)
  var label = listItem.querySelector("label"); // Label
  var button = listItem.getElementsByTagName("button")[0]; // Button

  var containsClass = listItem.classList.contains("editMode"); // We check for .editMode and assign it a variable
  if (containsClass) {
    // Switch from .editMode
    label.innerText = editInput.value; // Label text become the input's value
    button.innerText = "Edit"; // Buttons name modified to Edit
  } else {
    // Switch to .editMode
    editInput.value = label.innerText; // Input value becomes the label's text
    button.innerText = "Save"; // Button name modified to Save
  }
  listItem.classList.toggle("editMode"); // Toggle .editMode on the parent
};

const deleteTask = function () {
  // Delete an existing task
  var listItem = this.parentNode; // We use parentNode to target the object containing the delete button
  var ul = listItem.parentNode; // We use parentNode again to target the list containing the task
  ul.removeChild(listItem); // Remove the parent list item from the ul
};

var taskCompleted = function () {
  // Mark a task as complete
  var listItem = this.parentNode; // We assign it for readability
  completedTasksHolder.appendChild(listItem); // Append the task list item to the #completed-tasks
  bindTaskEvents(listItem, taskIncomplete); // We bind it to the opposite holder
};

const taskIncomplete = function () {
  // Mark a task as incomplete
  var listItem = this.parentNode; // We assign it for readability
  incompleteTasksHolder.appendChild(listItem); // Append the task list item to the #incomplete-tasks
  bindTaskEvents(listItem, taskCompleted); // We bind it to the opposite holder
};

const bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  // Select it's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]"); //
  var editButton = taskListItem.querySelector("button.edit"); //
  var deleteButton = taskListItem.querySelector("button.delete"); //
  editButton.onclick = editTask; // Bind editTask to edit button
  deleteButton.onclick = deleteTask; // Bind deleteTask to delete button
  checkBox.onchange = checkBoxEventHandler; // Bind checkBoxEventHandler to checkbox
};

var ajaxRequest = function () {
  // console.log("AJAX request");
};
addButton.addEventListener("click", addTask); // Adds event listener for the click handler to the addTask function
addButton.addEventListener("click", ajaxRequest); // Adds an event listener for AJAX

function setLocalStorage() {
  localStorage.setItem("task", incompleteTasksHolder.value);
}
window.addEventListener("beforeunload", setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem("task")) {
    incompleteTasksHolder.value = localStorage.getItem(
      "task",
      incompleteTasksHolder.value
    );
  }
  // console.log(incompleteTasksHolder.value);
}
getLocalStorage();
window.addEventListener("load", getLocalStorage);

for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
  // Cycle over incompleteTasksHolder ul list items
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted); // Bind events to list item's children (taskCompleted)
}

for (let i = 0; i < completedTasksHolder.children.length; i++) {
  // Cycle over completedTasksHolder ul list items
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete); // Bind events to list item's children (taskIncomplete)
}
