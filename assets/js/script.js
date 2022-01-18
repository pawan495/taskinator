
var buttonE1 = document.querySelector("#save-task");
console.log(buttonE1);
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }
  formEl.addEventListener("submit", createTaskHandler);
