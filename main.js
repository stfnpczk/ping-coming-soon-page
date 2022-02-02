const form = document.getElementById("form");
const input = document.getElementById("input");
const errorMessage = document.getElementById("error");

//preliminary helper functions
const checkEmail = (email) => {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const displayError = (message) => {
  input.classList = "cta__input error";
  errorMessage.innerText = message;
};

const removeError = () => {
  input.classList.remove("error");
};

//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value) {
    displayError("Whoops! It looks like you forgot to add your email");
  } else if (!checkEmail(input.value)) {
    displayError("Please provide a valid email address");
  } else {
    form.reset();
  }
});

input.addEventListener("input", () => {
  removeError();
});
