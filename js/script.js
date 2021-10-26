const button = document.getElementById("form-button");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-message");
const subscribedMsg = document.getElementById("subscribed-message");

button.addEventListener("click", function (event) {
  event.preventDefault();

  // regex from here: https://www.w3resource.com/javascript/form/email-validation.php
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    emailInput.classList.remove("error");
    errorMsg.classList.remove("error");
    subscribedMsg.classList.add("fadeIn");

    setTimeout(function () {
      subscribedMsg.classList.replace("fadeIn", "fadeOut");
    }, 5000);

    setTimeout(function () {
      subscribedMsg.classList.remove("fadeOut");
    }, 6000);
  } else {
    emailInput.classList.add("error");
    errorMsg.classList.add("error");
  }
});
