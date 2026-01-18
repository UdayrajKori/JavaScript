let seconds = prompt("Enter the total number of seconds: ");
seconds = Number(seconds);

let minutes = Math.floor(seconds / 60);
let remainingSeconds = seconds % 60;

console.log(`${seconds} seconds is equal to ${minutes} minutes and ${remainingSeconds} seconds.`);


