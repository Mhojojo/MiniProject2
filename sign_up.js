document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});
document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const contactNumber = document.getElementById("mobileNumber");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePhoneNumber = (input_str) => {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return re.test(input_str);
};

const validateInputs = () => {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const contactNumberValue = contactNumber.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (fullNameValue === "") {
    setError(fullName, "Full name is required.");
  } else {
  }

  if (contactNumberValue === "") {
    setError(contactNumber, "Contact number is required.");
  } else if (!validatePhoneNumber(contactNumberValue)) {
    setError(contactNumber, "Contact number is not valid.");
  }

  if (emailValue === "") {
    setError(email, "Email is required.");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address.");
  } else {
  }

  if (passwordValue === "") {
    setError(password, "Password is required.");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
  } else {
  }
  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords do not match.");
  }
};

function validated() {
  if (validateInputs()) {
    alert("Registered Successfully");
  }
}
