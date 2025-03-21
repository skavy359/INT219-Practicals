const readlineSync = require("readline-sync");

// JS OBJECTS

// const car= new Object()
// car.brand="Toyota";
// car.model="Corolla";
// car.year=2022;

// car.getDetails= function(){
//     return `Brand: ${this.brand}, Model: ${this.model} and Year is ${this.year}`;
// };

// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);
// console.log(car.getDetails());

const person={
    firstName:"Kavy",
    lastName:"Sharma",
    age:19,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    greet: function(){
        console.log("Hello, my name is "+ this.fullName());
    }
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName());
person.greet();

person.age=20;
console.log(person.age);

person.occupation="Engineer";
console.log(person.occupation);
