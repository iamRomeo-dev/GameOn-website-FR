function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const msgSuccess = document.getElementById("msgSuccessId");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
document.querySelector(".close").addEventListener("click", () => {
  modalbg.style.display = "none";
});

// close modal event
msgSuccess.addEventListener("click", () => {
  msgSuccess.style.display = "none";
});

//=========================================

let form = document.getElementById("form");
let firstNameInput = document.getElementById("first");
let lastNameInput = document.getElementById("last");

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", validation);

function validation(e) {
  e.preventDefault();
  let firstNameInput = document.getElementById("first");
  let espacementInput = document.querySelectorAll(".espacementInput");
  let email = document.getElementById("email").value;
  let quantity = document.getElementById("quantity").value;
  console.log(quantity.length)
  //FIRSTNAME
  if (firstNameInput.value.length < 2) {
    let firstNameError = document.getElementById("firstNameError");
    firstNameError.style.display = "block";

    espacementInput.forEach((element) => (element.style.display = "none"));
  } //LASTNAME
  else if (lastNameInput.value.length < 2) {
    firstNameError.style.display = "none";

    let lastNameError = document.getElementById("lastNameError");
    lastNameError.style.display = "block";

    espacementInput.forEach((element) => (element.style.display = "none"));
  } //EMAIL
  else if (!validateEmail(email)) {
    lastNameError.style.display = "none";

    let emailError = document.getElementById("emailError");
    emailError.style.display = "block";

    espacementInput.forEach((element) => (element.style.display = "none"));
  } //NUMBERS
  else if (isNaN(quantity) === true || quantity.length == 0) {
    emailError.style.display = "none";

    let quantityError = document.getElementById("quantityError");
    quantityError.style.display = "block";
  } //TRUE
  else {
    msgSuccess.style.display = "block";

    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
    emailError.style.display = "none";
    quantityError.style.display = "none";
  }
}

// function validation(e) {
//   e.preventDefault();
//   if (lastNameInput.value.length < 2 || firstNameInput.value.length < 2) {
//     let firstNameError = document.getElementById("firstNameError");
//     firstNameError.style.display = "block";

//     let lastNameError = document.getElementById("lastNameError");
//     lastNameError.style.display = "block";

//     let espacementInput = document.querySelectorAll(".espacementInput");
//     espacementInput.forEach((element) => (element.style.display = "none"));
//   } else {
//     msgSuccess.style.display = "block";

//     firstNameError.style.display = "none";
//     lastNameError.style.display = "none";
//   }
// }
