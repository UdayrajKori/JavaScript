let length = prompt("Enter the length of the rectangle: ");
let width = prompt("Enter the width of the rectangle: ");

length = Number(length);
width = Number(width);

let perimeter = 2 * (length + width);

console.log(`The perimeter of the rectangle with length ${length} and width ${width} is: ${perimeter}`);