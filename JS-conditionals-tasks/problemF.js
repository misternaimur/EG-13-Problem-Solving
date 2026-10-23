/**
 * Ticket fare Calculator
 *     - Children (age < 10): free
 *     - Students get a 50% discount
 *     - Senior citizens (age >= 60) gets a 15% Discount
 *     - Otherwise Regular ticket fare 800 tk
 *
 * @format
 */




const age = 65;
const people = "Senior citizens";
const fare = 800;

if (age < 10 || people === "Children") 
{
  console.log("Ticket is free.");
} 
else if (people === "Student")
{
  console.log("Discounted fare:", fare * 0.5, "tk");
} 
else if (age >= 60 || people === "Senior citizens") 
{
  console.log("Discounted fare:", fare * 0.85, "tk");
} 
else {
  console.log("Regular ticket fare:", fare, "tk");
}
