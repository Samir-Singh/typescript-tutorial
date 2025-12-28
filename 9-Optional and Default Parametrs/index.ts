/*
Typescript allows us to define optional and default parameters in functions.
Optional parameters are denoted by appending a ( ? ) symbol after the parameter name.
and default parameters are specified by providing a default value in the parameter declaration.
*/

// Optional parameters
function greet(name: string, age?: number) {
  if (age) {
    return `Hello ${name}, you are ${age} years old`;
  } else {
    return `Hello ${name}`;
  }
}

console.log(greet("John", 12));
console.log(greet("Jolly"));

// Default parameters
function welcome(name: string, age: number = 12) {
  return `Hello ${name}, you are ${age} years old`;
}

console.log(welcome("John", 22));
console.log(welcome("Jolly"));
