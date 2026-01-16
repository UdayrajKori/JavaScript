
// Assignment Operators

let a = 10;
let b = 5;

a += b; // a = a + b
console.log("After a += b, a = ", a);

a -= b; // a = a - b
console.log("After a -= b, a = ", a);

a *= b; // a = a * b
console.log("After a *= b, a = ", a);

a /= b; // a = a / b
console.log("After a /= b, a = ", a);

a %= b; // a = a % b
console.log("After a %= b, a = ", a);

// Challenge 1: Initialize a variable 'count' with value 0.
// Increment the value of 'count' by 1 using an assignment operator.
// Then, multiply the value of 'count' by 5 using another assignment operator.
// Finally, log the value of 'count' to the console.

let count = 0;
count += 1; // Increment by 1
count *= 5; // Multiply by 5

console.log("Final value of count: ", count);