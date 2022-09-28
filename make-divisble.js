
const prompt = require('prompt-sync')({ sigint: true });

let x = Number(prompt("Enter a number for X: "));
let y = Number(prompt("Enter a number for Y: "));

while (x%y !== 0 ) {

    console.log("Add 1 to X untill its divisible by Y: " + x);
    x++;
}
console.log(x + " is divisible by " + y)