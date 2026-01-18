let days = prompt("Enter number of days: ");
days = Number(days);

let years = Math.floor(days / 365);
let months = Math.floor((days % 365) / 30);
let remainingDays = days % 365 % 30;

console.log(`${days} days is approximately ${years} years, ${months} months, and ${remainingDays} days.`);