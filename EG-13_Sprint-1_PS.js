// Problem 01

/**
 * @format
 * @param {number} year
 * @return {boolean}
 */

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }

  console.log(isLeapYear(2024));


// Problem 02

/**
 * @param {number}
 * @return {number[]}
 */

function generateFibonacci(n) {
  let f = 0;
  let s = 1;
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(f);

    let n = f + s;
    f = s;
    s = n;
  }

  return result;
}

console.log(generateFibonacci(10));


// Problem 03

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function findGCD(a, b) {
  while (b !== 0) {
       let r = a % b;

      a = b;
      b = r;
     }

      return a;
     }

     console.log(findGCD(48, 18));

    // // Problem 04

    function findLCM(a, b) {
       let max = Math.max(a, b);

      while (true) {
    if (max % a === 0 && max % b === 0) {
         return max;
       }
    max++;
      }
     }
    console.log(findLCM(12, 18));

    // Problem 05

    function isPrime(num) {
      if (num < 2) {
        return false;
      }

      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
          return false;
        }
      }

      return true;
    }

    console.log(isPrime(29));

    // Problem 06

    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */

    function mergeSortedArrays(arr1, arr2) {
      let result = [];

      let i = 0;
      let j = 0;

      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
          result.push(arr1[i]);
          i++;
        } else {
          result.push(arr2[j]);
          j++;
        }
      }

      while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
      }

      while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
      }

      return result;
    }

    console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

    // Problem 07

    function findMedian(nums) {
      nums.sort(function (a, b) {
        return a - b;
      });

      let mid = Math.floor(nums.length / 2);

      if (nums.length % 2 !== 0) {
        return nums[mid];
      } else {
        let first = nums[mid - 1];
        let second = nums[mid];

        return (first + second) / 2;
      }
    }

    console.log(findMedian([7, 1, 3, 4, 9]));

    //Problem 08

    /**
     * @param {number[]} nums
     * @return {number|null}
     */

    function findSecondLargest(nums) {
      nums.sort((a, b) => b - a);

      let largest = nums[0];

      for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== largest) {
          return nums[i];
        }
      }

      return null;
    }

    console.log(findSecondLargest([10, 20, 4, 45, 99, 99]));

    // Problem 09

    /**
     * @param {Array} arr
     * @return {*}
     */

    function findMode(arr) {
      let count = {};

      for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
          count[arr[i]] = count[arr[i]] + 1;
        } else {
          count[arr[i]] = 1;
        }
      }

      let mode = arr[0];

      for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] > count[mode]) {
          mode = arr[i];
        }
      }

      return mode;
    }

    console.log(findMode([1, 3, 3, 2, 1, 3, 4]));

    // Problem 10

    /**
     * @param {string[]} arr
     * @return {string[]}
     */

    function naturalSort(arr) {
      arr.sort(function (a, b) {
        let numA = Number(a.split("file")[1].split(".")[0]);
        let numB = Number(b.split("file")[1].split(".")[0]);

        return numA - numB;
      });

      return arr;
    }

    console.log(
      naturalSort(["file10.txt", "file2.txt", "file1.txt"])
    );
  }
