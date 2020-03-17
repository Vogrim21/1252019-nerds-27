var link = document.querySelector(".address-btn");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".popup-close");
var name = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
  login.value = storage;
  email.focus();
  } else {
  login.focus();
  }
 });

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
 });

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
  evt.preventDefault();
  console.log("Нужно ввести логин и пароль");
  } else {
  if (isStorageSupport) {
  localStorage.setItem("login", login.value);
  }
  }
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-show")) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  }
  }
  });
