//Importing prompt to console
"use strict";

const ps = require("prompt-sync");
//Ensuring signal interruption
const prompt = ps({sigint:true});
//
console.log("Welcome to IMAY's Basic Arithmetric Calculator with JavaScript")

//declaring the variable answer as a number
let answer=0;
//Requesting for user input for operator
const opr=prompt("Enter operator (+, -, /,*): ")
//validating operator inputed
if(opr=="+"||opr=="-"||opr=="*"||opr=="/"){

    //Requesting for user input and validation
    const num1=parseFloat(prompt("Enter first number: "));
      
    //using an if command to ensure the program is in stages after user input validation
    if (isNaN(num1)){
        console.log("Wroung Input, please enter numbers only");
    }else{
        //second user input and validation
        const num2=parseFloat(prompt("Enter second number: "));
        if (isNaN(num2)){
            console.log("Wroung Input, please enter numbers only");
        }else{
            //use of operators and corresponding operations with subsequent results
            //Addittion
        if (opr =="+"){
            console.log("Addition");
        answer= num1+num2;
    }
    //Subtraction
    else if(opr== "-"){
        console.log("Subtraction");
        answer= num1 - num2
    }
    //Multiplication
    else if(opr== "*"){
        console.log("Multiplication");
        answer= num1 * num2;
    }
    //Division
    else if(opr== "/"){
        console.log("Division");
        answer= num1 / num2
    }
    //Display of results in terminal or console.
    // In terminal you can use {node filename.js} to run the code.
    console.log(num1+" "+opr+" "+ num2+" "+"="+" "+ answer)
    } 
}
}
// Operator validation {else statement}
else{
    console.log("Please enter the right operator; either + , - , * or /.")
}


