/*
 * Filename: sophisticated_code.js
 * Description: Complex JavaScript code showcasing various advanced concepts
 * Author: Virtual Assistant
 * Date: September 1, 2021
 */

// Class representing a User
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Method to greet the user
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

// Instantiate a User object
const user = new User("John", 25, "john@example.com");
user.greet();

// Function to calculate factorial using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(`Factorial of 5: ${factorial(5)}`);

// Promisify setTimeout function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to demonstrate asynchronous behavior
async function asyncFunction() {
  console.log("Start");
  await delay(2000);
  console.log("After 2 seconds");
}

asyncFunction();

// Object destructuring
const person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

const { firstName, lastName, address: { city } } = person;

console.log(`Name: ${firstName} ${lastName}`);
console.log(`City: ${city}`);

// Fetch API to retrieve data from a remote server
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Higher-order function
function multiplyBy(factor) {
  return (number) => number * factor;
}

const multiplyByTwo = multiplyBy(2);
console.log(`10 multiplied by 2: ${multiplyByTwo(10)}`);

// Regular expression to validate email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email) => emailPattern.test(email);
console.log(`Is 'john@example.com' a valid email? ${isValidEmail('john@example.com')}`);

// Event handling
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!");
});

// Set and Map data structures
const mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("apple");

console.log(mySet); // Output: Set { 'apple', 'banana' }
console.log(`Set contains 'banana'? ${mySet.has("banana")}`);

const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");

console.log(myMap); // Output: Map { 'key1' => 'value1', 'key2' => 'value2' }
console.log(`Value for 'key1': ${myMap.get("key1")}`);

// Syntax for async/await in a try-catch block
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// ... continue with more sophisticated code ...