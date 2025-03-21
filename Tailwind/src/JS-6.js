const readlineSync = require("readline-sync");

// let number = readlineSync.question("Enter a number: ");
// number = Number(number);

// if (number > 0) console.log("Number is positive");
// else if (number < 0) console.log("Number is negative");
// else console.log("Number is zero");

// a = Number(readlineSync.question("enter A: "));
// b = Number(readlineSync.question("Enter b: "));
// const add = function (a, b) {
//     return a + b;
// };

// const multiply = (a,b) => a*b; //Arrow Function in JavaScript 

// console.log(add(a, b));
// console.log(multiply(a,b));

// function isValidUser(username,password){
//     if(username=="" || password=="") return false;
//     return true;
// }

// username= readlineSync.question("Enter your username: ");
// password=readlineSync.question("Enter your password: ");

// console.log(isValidUser(username,password));

// function isEligibleforDiscount(age,isMember){
//     if(isMember==true && age>=60){
//         return true;
//     }
//     return false;
// }

// age=Number(readlineSync.question("Enter your age: "));
// isMember=readlineSync.question("Enter your eligibility: ");

// console.log(isEligibleforDiscount(age,isMember));

function isBetween(x,min,max){
    if(x>min && x<max) return true;
    return false;
}

x=Number(readlineSync.question("Enter X:"));
min=Number(readlineSync.question("Enter min:"));
max=Number(readlineSync.question("Enter max:"));

console.log(isBetween(x,min,max));