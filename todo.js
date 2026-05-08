const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function completeToDo(event) {
  const li = event.target.parentElement;
  li.classList.toggle("done");
}

function deleteToDo(event) {
  const li = event.target.parentElement;

  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));

  saveToDos();
}

function paintToDo(newTodo) {
  if (!newTodo || !newTodo.text) return;

  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

const completeButton = document.createElement("button");
completeButton.innerText = "✓";
completeButton.classList.add("complete-btn");
completeButton.addEventListener("click", completeToDo);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "지우기";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", deleteToDo);

const buttonBox = document.createElement("div");
buttonBox.classList.add("todo-buttons");

buttonBox.appendChild(completeButton);
buttonBox.appendChild(deleteButton);

li.appendChild(span);
li.appendChild(buttonBox);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value.trim();

  if (newTodo === "") return;

  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos.filter((toDo) => toDo && toDo.text);

  toDos.forEach(paintToDo);

  saveToDos();
}