// Using Arithmetic Operators
//JavaScript program to swap two variables

//take input from the users
let a = 4;
let b = 2;

// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


// This method only uses the two variables and swaps the value of the variables using arithmetic operators + and -
// Let's see how the above program swaps values. Initially, a is 4 and b is 2.

//     a = a + b assigns the value 4 + 2 to a (now 6).
//     b = a - b assigns the value 6 - 2 to b (now 4).
//     a = a - b assign the value 6 - 4 to a (now 2).

// Finally, a is 2 and b is 4.