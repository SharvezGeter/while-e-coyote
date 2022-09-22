const prompt = require('prompt-sync')({sigint: true});

//Write a program that takes a string and 'repeats it' until 
//the string's length is greater than or equal to 10

let str = prompt("Enter a string: ")


while(str.length <= 10){
str = str + str
console.log(str)
console.log(str.length)
}







