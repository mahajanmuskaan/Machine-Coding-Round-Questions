import "./styles.css";

const nameText = document.getElementById("name");
const emailText = document.getElementById("email");
const btn = document.getElementById("submit");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

btn.addEventListener("click", () => {
  if (nameText.value !== "" && emailRegex.test(emailText.value) === true) {
    alert("Form submitted.");
  } else if (
    nameText.value === "" &&
    emailRegex.test(emailText.value) === true
  ) {
    alert("Fill Name field.");
  } else if (
    nameText.value !== "" &&
    emailRegex.test(emailText.value) === false
  ) {
    alert("Fill Valid Email.");
  } else {
    alert("Fill all fields.");
  }
});
