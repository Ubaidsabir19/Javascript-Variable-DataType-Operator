"use strict";
//Variables
let message = "Hello world";
let newNumber = 1;
//Explicit method
let bol = true;
//implicit method
let vName = "pakistan";
console.log(message);
console.log(newNumber);
//block scope (let, const) local variables
//functional scope(var) Global variables
//block scope
{
    let x = 8;
    //only acces in this place
    console.log(x);
}
//Functional scope
let y = 7;
console.log(y);
