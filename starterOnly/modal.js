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
  let firstNameInput = document.getElementById("first");
  let lastNameInput = document.getElementById("last");
  let email = document.getElementById("email").value;
  let date = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let checkbox1 = document.getElementById("checkbox1");
  let espacementInput = document.querySelectorAll(".espacementInput");

  firstNameError.style.display = "none";
  //VALIDATION FIRSTNAME
  if (firstNameInput.value.length < 2 || isNaN(firstNameInput.value) === false) {
    let firstNameError = document.getElementById("firstNameError");
    firstNameError.style.display = "block";

    espacementInput.forEach((element) => (element.style.display = "none"));
  } //VALIDATION LASTNAME
  else if (lastNameInput.value.length < 2 || isNaN(lastNameInput.value) === false) {
    firstNameError.style.display = "none";

    let lastNameError = document.getElementById("lastNameError");
    lastNameError.style.display = "block";

    espacementInput.forEach((element) => (element.style.display = "none"));
  } //VALIDATION EMAIL
  else if (!validateEmail(email)) {
    lastNameError.style.display = "none";

    let emailError = document.getElementById("emailError");
    emailError.style.display = "block";

    espacementInput.forEach((element) => (element.style.display = "none"));
  } //VALIDATION BIRTHDATE
  else if (date === "") {
    emailError.style.display = "none";

    let birthdateError = document.getElementById("birthdateError");
    birthdateError.style.display = "block";

    espacementInput.forEach((element) => (element.style.display = "none"));
  } //VALIDATION NUMBERS
  else if (isNaN(quantity) === true || quantity.length == 0) {
    birthdateError.style.display = "none";

    let quantityError = document.getElementById("quantityError");
    quantityError.style.display = "block";
  } //VALIDATION UTILISATION CONDITIONS
  else if (!checkbox1.checked) {
    quantityError.style.display = "none";

    let checkbox1Error = document.getElementById("checkbox1Error");
    checkbox1Error.style.display = "block";

    espacementInput.forEach((element) => (element.style.display = "none"));
  } //TRUE
  else {
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
