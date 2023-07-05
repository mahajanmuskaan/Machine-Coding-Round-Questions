import "./styles.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `My name is ${this.name}. I'm ${this.age} years old.`;
  }
}

const person1 = new Person("Muskaan", 24);
const message = person1.greeting();
console.log(message);
