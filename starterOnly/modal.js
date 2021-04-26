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

form.addEventListener("submit", validation);

function validation(e) {
  e.preventDefault();
  if (firstNameInput.value.length < 2) {
    let firstNameError = document.getElementById("firstNameError");
    firstNameError.style.display = "block";

    let espacementInput = document.querySelectorAll(".espacementInput");
    espacementInput.forEach((element) => (element.style.display = "none"));

  } else if (lastNameInput.value.length < 2) {
    firstNameError.style.display = "none";

    let lastNameError = document.getElementById("lastNameError");
    lastNameError.style.display = "block";

    let espacementInput = document.querySelectorAll(".espacementInput");
    espacementInput.forEach((element) => (element.style.display = "none"));
    
  } else {
    msgSuccess.style.display = "block";

    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
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