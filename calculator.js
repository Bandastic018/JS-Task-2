"use strict";

const ps = require("prompt-sync");
const prompt = ps({sigint:true});

console.log("Welcome to Basic Arithmetric Calculator")

let answer=0;
const opr=prompt("Enter operator (+, -, /,*): ")
if(opr=="+"||opr=="-"||opr=="*"||opr=="/"){
    const num1=parseFloat(prompt("Enter first number: "));
        
    
    if (isNaN(num1)){
        console.log("Wroung Input, please enter numbers only");
    }else{
        const num2=parseFloat(prompt("Enter second number: "));
        if (isNaN(num2)){
            console.log("Wroung Input, please enter numbers only");
        }else{
        if (opr =="+"){
            console.log("Addition");
        answer= num1+num2;
    }
    
    else if(opr== "-"){
        console.log("Subtraction");
        answer= num1 - num2
    }
    else if(opr== "*"){
        console.log("Multiplication");
        answer= num1 * num2;
    }
    else if(opr== "/"){
        console.log("Division");
        answer= num1 / num2
    }
    console.log(num1+" "+opr+" "+ num2+" "+"="+" "+ answer)
    } 
}
}
else{
    console.log("Please enter the right operator; either + , - , * or /.")
}


