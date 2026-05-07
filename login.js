const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");
const todoSection = document.querySelector("#todo-section");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = ` ${username}  님의 PC입니다`;

  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutButton.classList.remove(HIDDEN_CLASSNAME);
  todoSection.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function onLogoutClick() {
  localStorage.removeItem(USERNAME_KEY);

  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutButton.classList.add(HIDDEN_CLASSNAME);
  todoSection.classList.add(HIDDEN_CLASSNAME);

  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  todoSection.classList.add(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutButton.addEventListener("click", onLogoutClick);