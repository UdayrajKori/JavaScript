
console.log("Hello World");

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

let b = 20;
{
    let a = 10;

    console.log(a);

}

console.log(b);
console.log(a);
