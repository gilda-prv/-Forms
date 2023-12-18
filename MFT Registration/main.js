let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let password = document.getElementById("password");
let NationalCode = document.getElementById("NationalCode");
let phone = document.getElementById("phone");
let userlogin = document.getElementById("user-login");
let passwordlogin = document.getElementById("password-login");
let confrimPassword = document.getElementById("confrim");
function validation() {
  // firstname
  if (firstname.value == "") {
    document.getElementById("result").innerHTML = "Enter Your first name";
    return false;
  }
  //   lastname
  else if (lastname.value == "") {
    document.getElementById("result").innerHTML = "Enter Your last name";
    return false;
  }
  //   NationalCode
  else if (NationalCode.value == "") {
    document.getElementById("result").innerHTML = "Enter Your National Code";
    return false;
  } else if (NationalCode.value.length < 10) {
    document.getElementById("result").innerHTML =
      "Enter at least 10 national codes";
    return false;
  }
  // phone
  else if (phone.value == "") {
    document.getElementById("result").innerHTML = "Enter Your phone number";
    return false;
  } else if (phone.value.length < 11) {
    document.getElementById("result").innerHTML = "Your phone number is wrong";
    return false;
  }
  //   password
  else if (password.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Password";
    return false;
  } else if (password.value.length <= 4 || password.value.length >= 12) {
    document.getElementById("result").innerHTML =
      "Enter password between 4 and 12 characters";
    return false;
  } //   confrimPassword
  else if (confrimPassword.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Confrim Password";
    return false;
  } else if (password.value !== confrimPassword.value) {
    document.getElementById("result").innerHTML = "Password doesn`t matched";
    return false;
  } else {
    alert("welcome!");
  }
}
// login
function login() {
  // user-login
  if (userlogin.value == "") {
    document.getElementById("results").innerHTML = "Enter your username";
    return false;
  }
  //password-login
  else if (passwordlogin.value == "") {
    document.getElementById("results").innerHTML = "Enter your password";
    return false;
  } else if (password.value.length <= 4 || password.value.length >= 12) {
    document.getElementById("result").innerHTML =
      "Enter password between 4 and 12 characters";
    return false;
  } else {
    alert("welcome!");
  }
}
// loading
document.addEventListener(
  "DOMContentLoaded",
  function () {
    setTimeout(function () {
      document.getElementById("loading").className = "slideDown";
    }, 3800);
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    setTimeout(function () {
      document.getElementById("loading-center").className = "zoomOut";
    }, 3200);
  },
  false
);
document.addEventListener(
  "DOMContentLoaded",
  function () {
    setTimeout(function () {
      document.getElementById("block-1").className = "slideInUp";
    }, 3800);
  },
  false
);
