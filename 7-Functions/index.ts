// In this topic we will explore how can we define and use functions in TypeScript.
// Let's  create a simple function that adds two numbers together.
function add(a: number, b: number): number {
  return a + b;
}
// Now we can call the function and log the result.
const sum = add(5, 10);
console.log(`The sum of 5 and 10 is: ${sum}`);

// Next, let's create a function that greets a user by their name.
function greet(name: string): string {
  return `Hello, ${name}!`;
}
const greeting = greet("Alice");
console.log(greeting);

// Let's create an arrow function that greets a user by their name.
const greetArrow = (name: string): string => `Hi, ${name}!`;
const arrowGreeting = greetArrow("Bob");
console.log(arrowGreeting);

// We can also create functions with optional parameters.
function multiply(a: number, b?: number): number {
  if (b === undefined) {
    return a * a; // If b is not provided, square a
  }
  return a * b;
}
console.log(`Multiplying 5 and 2 gives: ${multiply(5, 2)}`);
console.log(`Squaring 5 gives: ${multiply(5)}`);

// Finally, let's create a function with default parameters.
function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}
console.log(`2 to the power of 3 is: ${power(2, 3)}`);
console.log(`3 squared is: ${power(3)}`);

//  Practice Exercise 1: Write a function called isPalindrome that takes a string as a parameter and return true if the string is a palindrome and false otherwise

function isPalindrome(input: string): boolean {
  let i = 0;
  let j = input.length - 1;

  while (i < j) {
    if (input[i] !== input[j]) return false;
    i++;
    j--;
  }

  return true;
}

console.log("racecar is palindrome: ", isPalindrome("racecar"));
console.log("bullet is palindrome:", isPalindrome("bullet"));

// Practice Exercise 2: Create a function called calculateAverage that takes an array of number as a parameter and returns the average of those numbers

function calculateAverage(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum / arr.length;
}

console.log("Average of 1,2,3,4,5:", calculateAverage([1, 2, 3, 4, 5]));
console.log("Average of 6,7,8,9,10:", calculateAverage([6, 7, 8, 9, 10]));
