function checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    document.getElementById("email-error").innerText("Valid email required")
    return (false)
}

document.getElementById("email").addEventListener(onkeyup, checkEmail)