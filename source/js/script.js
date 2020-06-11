var link = document.querySelector(".address-btn");
var popup = document.querySelector(".page-footer .modal");
var close = document.querySelector(".popup-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=mail]");
var submitBtn = popup.querySelector("[type=submit]");
var isStorageSupport = true;
var storage = "";


try {
  var storage = localStorage.getItem("login");
} catch (error) {
  var isStorageSupport = false;
}

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
  popup.classList.remove("modal-error");
  popup.classList.remove("modal-invalid");
});

submitBtn.addEventListener("click", function() {
  popup.classList.add("modal-invalid");
});

form.addEventListener("click", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
