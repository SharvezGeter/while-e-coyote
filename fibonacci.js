const prompt = require('prompt-sync')({sigint: true});

let userInput = Number(prompt("Enter a number: "))
let num1 = 0
let num2 = 1
let num3 = Number()
let user = 0

while(user < userInput){
    if(user === 0){
        console.log()
    }else if ( user === 1){
        console.log(1)
    }else{
        num3 - num1 + num2
        console.log(num1 + num2)
        num1 - num2
        num2 - num3
        user++
    }
    
}

//Write a program that prompts the user 
//for two numberx, x and y. The program should 
//add one to x until it is divisble by y.



