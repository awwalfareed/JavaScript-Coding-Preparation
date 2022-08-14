// If a, b and c are the three sides of a triangle, then 
// s = (a+b+c)/2
// area = √(s(s-a)*(s-b)*(s-c))

// JavaScript program to find the area of a triangle

const side1 = 3;
const side2 = 4;
const side3 = 5;

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);