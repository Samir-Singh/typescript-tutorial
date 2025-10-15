/*
Type annotation in typescript  are used to explicitly specify the type of a variable, function parameter, or object property using symbol colon (:). 
This helps catch errors early, improves code readability, and ensure type safety.

Below adding the example: where we are explicitly define the type of the variables like string, number
*/

const str: string = "TypeScript";
const num: number = 4;

// Function with type annotations ... here in the below code again we are explicitly define the type of the parameter and return type with string
function greet(name: string): string {
  return `Hello ${name}`;
}

greet("John");
