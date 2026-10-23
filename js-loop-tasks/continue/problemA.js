/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}