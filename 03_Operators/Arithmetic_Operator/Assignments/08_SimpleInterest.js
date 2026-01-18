let P = prompt("Enter the principal amount (P): ");
let R = prompt("Enter the rate of interest (R) in percentage: ");
let T = prompt("Enter the time (T) in years: ");

P = Number(P);
R = Number(R);
T = Number(T);

let simpleInterest = (P * R * T) / 100;

console.log(`The Simple Interest for principal amount ${P}, rate of interest ${R}%, and time ${T} years is: ${simpleInterest}`);