//JavaScript program to swap two variables

//take input from the users
let x = 4;
let y = 2;

//create a temporary variable
let temp;

//swap variables
temp = x; 
x = y; 
y = temp;

console.log(`The value of x after swapping: ${x}`);
console.log(`The value of y after swapping: ${y}`);


//Here,

// We created a temp variable to store the value of x temporarily.
// We assigned the value of y to x.
// The value of temp is assigned to y
// As a result, the value of the variables are swapped.

// Note: You can also swap strings or other data types using this method.