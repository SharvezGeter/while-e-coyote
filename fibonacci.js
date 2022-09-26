const prompt = require('prompt-sync')({ sigint: true });
let n = Number(prompt("Enter a value for 'n': "));

let i = 0
let num = 1
let total = 0
console.log(i)
let count = 1

while (count < n) { 
    console.log(num)
    total = i + num
    i = num
    num = total
    count++;
}