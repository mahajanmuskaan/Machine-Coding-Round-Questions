import "./styles.css";

const str = ["Muskaan", "Rydham", "Bhaskar", "Meenu", "Gaurav"];
const newArr = [];

str.filter((value) => {
  if (value.includes("a")) {
    return newArr.push(value);
  }
  return newArr;
});

console.log(str);
console.log(newArr);
