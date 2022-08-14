// Using es6(ES2015) Destructuring assignment

//JavaScript program to swap two variables

//take input from the users
let a = 4;
let b = 2;

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


// Here, a new es6 feature, called destructuring assignment [a, b] = [b, a], is used to swap the value of two variables. If [a, b] = [1, 2, 3], the value of a will be 1 and value of b will be 2.

//     First a temporary array [b, a] is created. Here the value of [b, a] will be [2, 4].
//     The destructuring of the array is done, i.e [a, b] = [2, 4].

// As a result, the value of the variables are swapped

// Note: You can also swap strings or other data types using this method.