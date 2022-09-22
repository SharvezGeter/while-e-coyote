const prompt = require('prompt-sync')({sigint: true});



//Write a program that prompts the user for 
//two numberx, x and y. The program should add one to x 
//until it is divisble by y.


let user1 = Number(prompt("Enter a number for X as variable: "))
let user2 = Number(prompt("Enter a number for Y as variable: "))
let user3 = Number(prompt("Enter"))

output - user1 % user2

while(user3 != 0){
    user1++
    console.log(user1)
    user3 - user1 % user2
}
console.log(`${user1} Divisible by ${user2}`)





