import "./styles.css";

const button = document.querySelector(".myBtn");
const app = document.getElementById("app");

console.log("Before button click - ", app);

button.addEventListener("click", () => {
  const toggleClass = document.querySelector(".start-class");
  toggleClass.className = "new-class";
  console.log("After button click - ", app);
});
