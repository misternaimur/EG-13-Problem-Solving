/**
 * Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
 *
 * @format
 */

// for loop
let sum = 0;

for (let i = 1; ; i++) {
  sum += i;

  console.log(sum);

  if (sum >= 100) {
    break;
  }
}

// while

let i = 1;
let sums = 0;

while (true) {
  sums += i;

  if (sums >= 100) {
    break;
  }

  i++;
}

console.log("Sum:", sum);