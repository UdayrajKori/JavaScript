let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

let sum = num1 + num2 + num3;
let average = sum / 3;

console.log(`The average of ${num1}, ${num2}, and ${num3} is: ${average}`);