// Write a program to add two numbers

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

/*

- Here in the above code we have pre defined the type of parameters (a,b) and defined the return type of number also in function definition which 
make sure to write less buggy code.

- Now instead of number when you pass the string as an argument in add function you will get the error on compile time.

- But right now you will see an issue, the issue is when you get an error on compile time and when run command ( tsc filname.ts ) it still runs 
your code and create the filename.js file. So we don't want to do that.

- For that we have to first create a tsconfig.json file inside that file write a code ( "noEmitOnError": true ) it basically tells the compiler
that if there is any error in compile time than don't create the .js file ... but still when you write the command ( tsc index.ts ) it still create
the .js file so you can'nt do anything for this you can now instead of tsc index.tsx you can run another command tsc only it will not create the .js
file if there is any error and if no error it creates the .js file ... but this command create .js file for all .ts files present inside the project

*/
