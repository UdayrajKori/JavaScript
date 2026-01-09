
// console.log("Hello World");

/*
Let, Const, Var

 Var: Variable can be re-declared and updated. A global scope variable.
 let: Variable can be updated but not re-declared. A block scope variable.
 const: Variable cannot be updated or re-declared. A block scope variable. 
 (variable declared with const keyword must have declaration and initialization both in the same line)


 Rule for  variable delaration:
    1. Variable names are case sensitive.
    2. "a" & "A" is different.
    3. Only letters, digits, underscores(_) and dollar sign($) are allowed in variable names.
    4. only a letter, underscore(_) or $ should be the first character of a variable name.
    5. Reserved words can not be used as variable names.

 Primary (Primitive)  Data Types:
    - Number, String, Boolean, Null, Undefined, Symbol, BigInt
    - Use typeof operator to identify the type of variable.
 
 Different types of cases exits in programming:
    - camelCase, PascalCase, snake_case, kebab-case, etc.

*/


// Practical

// let b = 20;
// {
//     let a = 10;

//     console.log(a);

// }

// console.log(b);
// // console.log(a);

// const pi = 3.14;

// // pi = 5;
// console.log(pi);


// const city;
// console.log(city);

// var city = "New York";
// console.log(city);


// let name;
// let name_;
// let name1;
// let _name;
// let $name;

// let 1name; // Invalid
// let @name; // Invalid
// let let; // Invalid (reserved word)
// let var; // Invalid (reserved word)
// let const; // Invalid (reserved word)
// let function; // Invalid (reserved word)
// let if; // Invalid (reserved word)


// fisrt use case 
// suppose two product price come fromt the database, you need to store these price and show the total price as output.
// let price1 = 450;
// let price2 = 600;

// let totalPrice = price1 + price2;
// console.log(totalPrice);

// second use case
// A user enter their first name and last name into a form you need to display the full name as output.
// let firstName = "Udayraj";
// let lastName = "Kori";

// let fullName = firstName + " " + lastName;
// console.log(fullName);




// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");

// let fullName = firstName + " " + lastName;
// console.log(fullName);




// let firstNumber = parseFloat(prompt("Enter first number: "));
// let secondNumber = parseFloat(prompt("Enter second number: "));

// let sum = firstNumber + secondNumber;
// console.log("The sum is: " + sum);


// let a = 10;
// a = "Udayraj";
// a = true;

// console.log(typeof(a));




// let a = "1" + 2;
// let b = "5" - 3;
// let c = "10" * 2;
// let d = "20" / 4;


// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));

// console.log(a)
// console.log(b);
// console.log(c);
// console.log(d);


//  age = 35;
//  age = 25;
// console.log(age);

// console.log(first) // reference error



// let name;
// console.log(name); // undefined

// name = null;
// console.log(typeof(name)); // object




// let bigIntNumber = 1234567890123456789012345678901234567890n;
// console.log(typeof(bigIntNumber)); // bigint

// let bigIntNum = BigInt("1234567890123456789012345678901234567890");
// console.log(typeof(bigIntNum)); // bigint





// let symbl = Symbol("id");
// console.log(typeof(symbl)); // symbol


// let num = prompt("Enter a number: ");
// console.log(num, typeof(num)); // string

// num = Number(num);
// console.log(num, typeof(num)); // number  