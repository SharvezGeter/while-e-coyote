const prompt = require('prompt-sync')({sigint: true});

//Write a program that prompts the user for a number, 
//then repeatedly doubles that number until it is greater than or equal to 100.

let num = Number(prompt("Enter a number 1-100: "));



while(num <= 100){
    num = num  * 2
    console.log(num);
    }


