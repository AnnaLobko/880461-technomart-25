var link = document.querySelector(".our-address");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";


try {
  storage = localStorage.getItem("name")
} catch (err) {
  isStorageSupport = false;
}
if (popup){
  var form = document.querySelector(".letter-form")
  var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=e-mail]");
  var letter = popup.querySelector("[name=letter]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      name.value = storage;
    } else {
      name.focus();
    }

popup.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", name.value);
    }
  }
});
});
}



close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.remove("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");

    }
  }
});

var mapLink = document.querySelector(".button-map");

if(mapLink){
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.remove("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
}

var openModal = document.querySelectorAll(".buy, .button-buy");

if(openModal){
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");

for(var i = 0; i < openModal.length; i++) {
openModal[i].addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
 }
)};

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.remove("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
}


