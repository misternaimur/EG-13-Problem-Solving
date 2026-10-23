/**
 * you have two numbers in two variables, called: num1, num2
 *
 * now declare a variable called result.
 * if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
 *
 * write a simple if-else.
 *
 * also, write it using ternary operator.
 *
 * @format
 */



let num1 = 20;
let num2 = 21;
let sum = 0;

// using teinary operator 
num1 > num2 ? (sum = num1 * num1) : (sum = num1 + num2);


// 
if (num1 > num2) {
  sum = num1 * num1;
} else {
  sum = num1 + num2;
}

console.log(sum);

console.log(sum);
