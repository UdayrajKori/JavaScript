let salary = prompt("Enter your monthly salary: ");
salary = Number(salary);

let taxRate = prompt("Enter the tax rate (as a decimal, e.g., 10%): ");
taxRate = Number(taxRate);
let taxPercent = taxRate / 100;
let tax = salary * taxPercent;
let netSalary = salary - tax;

console.log(`Your monthly salary is: ₹.${salary.toFixed(2)}`);
console.log(`Tax deducted (${taxRate}%): ₹.${tax.toFixed(2)}`);
console.log(`Your net salary after tax is: ₹.${netSalary.toFixed(2)}`);