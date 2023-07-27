function checkEmail(input) {
  let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailFormat.test(String(input).toLowerCase());
}

function validate() {
  let result = document.getElementById("email-error");
  let emailInput = document.getElementById("email").value;

  if(checkEmail(emailInput)) {
    return true;
  } else {
    result.textContent = "Valid email required";
    document.getElementById("email").style.color = "tomato";
    document.getElementById("email").style.borderColor = "tomato";
    document.getElementById("email").style.backgroundColor = "hsl(4, 100%, 67%, 30%)";
  }
  return false;
}

document.getElementById("sign-up-form-button").addEventListener("click", validate)