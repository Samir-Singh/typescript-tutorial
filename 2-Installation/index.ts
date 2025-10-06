/*
To install typescript in our system we have to write a command ( npm install -g typescript ) we are adding -g to install
typescript globally that means typescript not only just installed in our single project it will available in our system widely.

Now to check if you typescript installed successfully or not by running ( tsc --v ) command in your compiler.
If this command shows you error on vs code compiler than you can run another command ( npx tsc --v ) this will shows
you the typescript version installed. If version is showing that means your typescript is installed successfully.
*/

let num: number = 5;
num = 5;
// num = "John"; // this will give us an error because you have static typed the num variable with number
console.log(num);

//To run the above code you have to run command ( npx tsc index.ts ) this will create another file index.js
