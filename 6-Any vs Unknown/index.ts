/*
Any type is the most flexible type in typescript. It essentially turns off the all type checking for the variables or expressions it is applied to.

UseCase:
    When working with dynamic data like user input, data fetching etc.
    When you when to migrate the code from JS to TS then you can make all variable to any so that file by file you can type safe the project

But we should ignore this because it makes our code less safer. Only use this when you have no options left
*/

let num: any = 5;
num = "five"; // this will run correctly because of any type

/*
Unknown type is same as any type but the only difference is before performing any operation in unknown type variable you have to first type check
with if condition
*/

let myNumber: unknown = 5;
myNumber = "samir";

// console.log(myNumber + 10) // you can'nt perform any operation on type unknown directly

if (typeof myNumber === "number") {
  console.log(myNumber + 10);
}
