const button = document.getElementById("form-button");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-message");

button.addEventListener("click", function (event) {
  event.preventDefault();

  if (emailInput.validity.valid) {
    emailInput.classList.remove("error");
    errorMsg.classList.remove("error");
    console.log("ok");
  } else {
    emailInput.classList.add("error");
    errorMsg.classList.add("error");
  }
});
