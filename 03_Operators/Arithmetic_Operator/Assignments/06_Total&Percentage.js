// take five subject obtained marks as input from the user and calculate total marks and percentage

const totalMarks = 500;

let Nepali = prompt("Enter marks obtained in Nepali: ");
let English = prompt("Enter marks obtained in English: ");
let Math = prompt("Enter marks obtained in Math: ");
let Science = prompt("Enter marks obtained in Science: ");
let SocialStudies = prompt("Enter marks obtained in Social Studies: ");

Nepali = Number(Nepali);
English = Number(English);
Math = Number(Math);
Science = Number(Science);
SocialStudies = Number(SocialStudies);

let totalObtainedMarks = Nepali + English + Math + Science + SocialStudies;
let percentage = (totalObtainedMarks / totalMarks) * 100;

console.log(`Total Marks Obtained: ${totalObtainedMarks} out of ${totalMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);