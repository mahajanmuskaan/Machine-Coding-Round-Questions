import "./styles.css";

const arr = [2, 26, 58, 9, 1, 56, 41, 99, 2, 6];
const sum = [];

// Use of filter method to find only even numbers from given array

const myFunction = arr.filter((value, index) => {
  //console.log(value, index);
  if (value % 2 === 0) {
    console.log(value);
    return sum.push(value);
  }
  return sum;
});

console.log(myFunction);

// Use of reduce method to add all the even numbers in sum array

const finalarr = sum.reduce((value1, value2) => {
  return value1 + value2;
});
console.log(finalarr);
