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
const buttonClose = document.getElementById("buttonClose");
const crossClose = document.getElementById("crossClose");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//=========================================

// close modal event
document.querySelector(".close").addEventListener("click", () => {
  modalbg.style.display = "none";
});

// close modal event
buttonClose.addEventListener("click", () => {
  msgSuccess.style.display = "none";
});
crossClose.addEventListener("click", () => {
  msgSuccess.style.display = "none";
});

//FUNCTION VALIDATION OF EMAIL WITH REGEX (USE INSIDE THE VALIDATION FUNCTION)
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//FUNCTION OF INPUTS VALIDATION
function validation(e) {
  e.preventDefault();

  let espacementInput = document.querySelectorAll(".espacementInput");
  espacementInput.forEach((element) => (element.style.display = "none"));

  //VALIDATION FIRSTNAME
  let firstNameInput = document.getElementById("first");
  let firstNameError = document.getElementById("firstNameError");
  if (
    firstNameInput.value.length < 2 ||
    isNaN(firstNameInput.value) === false
  ) {
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }

  //VALIDATION LASTNAME
  let lastNameInput = document.getElementById("last");
  let lastNameError = document.getElementById("lastNameError");
  if (lastNameInput.value.length < 2 || isNaN(lastNameInput.value) === false) {
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
  }

  //VALIDATION EMAIL
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");
  if (!validateEmail(email)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  //VALIDATION BIRTHDATE
  let date = document.getElementById("birthdate").value;
  let birthdateError = document.getElementById("birthdateError");
  if (date === "") {
    birthdateError.style.display = "block";
  } else {
    birthdateError.style.display = "none";
  }

  //VALIDATION NUMBERS
  let quantity = document.getElementById("quantity");
  let quantityError = document.getElementById("quantityError");
  if (isNaN(quantity.value) === true || quantity.value === '' || (quantity.value > 99) || (quantity.value < 0)) {
    quantityError.style.display = "block";
  } else {
    quantityError.style.display = "none";
  }

  //VALIDATION UTILISATION CONDITIONS
  let checkbox1 = document.getElementById("checkbox1");
  let checkbox1Error = document.getElementById("checkbox1Error");
  if (!checkbox1.checked) {
    checkbox1Error.style.display = "block";
  } else {
    checkbox1Error.style.display = "none";
  }

  //CONDITION DE VALIDATION DU FORMULAIRE
  if (
    checkbox1.checked &&
    ((quantity.value) != '' && isNaN(quantity.value) === false && (quantity.value < 99) && (quantity.value > 0)) &&
    date != "" &&
    validateEmail(email) &&
    (lastNameInput.value.length >= 2 || isNaN(lastNameInput.value) === true) &&
    (firstNameInput.value.length >= 2 || isNaN(firstNameInput.value) === true)
  ) {
    //RESULTAT DE LA VALIDATION
    msgSuccess.style.display = "block";

    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
    emailError.style.display = "none";
    quantityError.style.display = "none";
    birthdateError.style.display = "none";
    checkbox1Error.style.display = "none";
  }
}

//SUBMIT FORM
let form = document.getElementById("form");
form.addEventListener("submit", validation);
