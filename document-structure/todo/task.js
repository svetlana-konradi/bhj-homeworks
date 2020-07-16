"use strict";

const tasksList = document.querySelector("#tasks__list");
const taskForm = document.querySelector(".tasks__control");
const taskInput = taskForm.querySelector("#task__input");

function addTask(e) {
  e.preventDefault();
  
  if (taskInput.value != "") {
    tasksList.insertAdjacentHTML("beforeEnd",
      `<div class="task">
        <div class="task__title">
        ${taskInput.value}
        </div>
      <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    taskInput.value = "";
  };
}

taskForm.addEventListener("submit", addTask);

function closeTask() {
  let target = event.target;
  let currentTask = target.closest('.task');
  if (target.classList.contains('task__remove')) { 
      currentTask.remove();
  }    
}

tasksList.addEventListener('click', closeTask);
