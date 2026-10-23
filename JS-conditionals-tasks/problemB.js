/**
 * BMI Calculator and Health Category
 *
 * Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
 *
 *     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
 *     - BMI < 18.5, you are underweight.
 *     - BMI >= 18.5 and BMI <=24.9, you are normal.
 *     - BMI >=25 and BMI <= 29.9, you are overweight.
 *     - Otherwise, you are obese.
 *
 * @format
 */


const weight = 20;
const height = 4;

function calculateBMI(weight, height) {
  const BMI = weight / (height * height);
  return BMI;
}

const BMI = calculateBMI(weight, height);

console.log("Your BMI is:", BMI);

if (BMI < 18.5) {
  console.log("You are underweight.");
} 
else if (BMI >= 18.5 && BMI < 25)
{
  console.log("You are normal.");
} 
else if (BMI >= 25 && BMI < 30)
{
  console.log("You are overweight.");
} 
else {
  console.log("You are obese.");
}
