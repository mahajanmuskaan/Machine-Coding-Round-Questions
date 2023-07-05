import "./styles.css";

function localStorageExmaple() {
  localStorage.setItem("name", "Muskaan");
}

localStorageExmaple();

const nameVal = localStorage.getItem("name");
console.log(nameVal);
