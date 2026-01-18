let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");

a = Number(a);
b = Number(b);

console.log(`Before swapping: a = ${a}, b = ${b}`);

let temp = a;
a = b;
b = temp;

console.log(`After swapping: a = ${a}, b = ${b}`);