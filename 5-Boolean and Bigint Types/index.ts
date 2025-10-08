// The boolean type is used for logical values either true and false

// Write a typescript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(num: number): boolean {
  return num % 2 === 0 ? true : false;
}

console.log("2: isEven:", isEven(2));
console.log("3: isEven:", isEven(3));
console.log("4: isEven:", isEven(4));

// Write a typescript function isDivisibleBy4and8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.
function isDivisibleBy4and8(num: number): boolean {
  return num % 4 === 0 && num % 8 === 0;
}

console.log("32 isDivisibleBy4and8:", isDivisibleBy4and8(32));
console.log("36 isDivisibleBy4and8:", isDivisibleBy4and8(36));

/* 
- BigInt type is used to represent the very large integer that exceeds the safe limit of javascript number.
- In javascript maximum safe integer is Number.MAX_SAFE_INTEGER which is nearly equal to (9,007,199,254,740,991) if try to assign number greater
than this safe integer javascript can'nt abel to read.
- BigInt solves this problem by storing the number greater than max safe number.
- There are two ways to define BigInt ( by using n at the suffix of number or by using BigInt() constructor )
*/

let bigNumber: bigint = 9007199254740991n;
let anotherBig: bigint = BigInt("900719925474099123456789");

let result: bigint = bigNumber + anotherBig;
console.log(result);
