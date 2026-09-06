// Problem 01 
/**
* @param {number[]} nums
* @return {boolean}
*/

var containsDuplicate = function (nums) {
  let seen = [];

  for (let i = 0; i < nums.length; i++) {
    if (seen.includes(nums[i])) {
      return true;
    }

    seen.push(nums[i]);
  }

  return false;
};

//Problem 02 
/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let position = 0;

  // First, move all non-zero values to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position] = nums[i];
      position++;
    }
  }

  // Fill the remaining positions with zero
  while (position < nums.length) {
    nums[position] = 0;
    position++;
  }
};

//Problem 03 

/**
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let count = {};

  for (let char of s) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  for (let char of t) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  return true;
};


//Problem 04 


/**
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  let count = {};

  // Count characters in magazine
  for (let char of magazine) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  // Check ransom note characters
  for (let char of ransomNote) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  return true;
};

/**
 *
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let count = {};

  for (let num of nums) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }

    if (count[num] > nums.length / 2) {
      return num;
    }
  }
};

// Problem 06 

/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum = sum + nums[j];

            if (sum === k) {
                count++;
            }
        }
    }

    return count;
};

//Problem 09 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = {};

    for (let num of nums) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    let numbers = Object.keys(count);

    numbers.sort(function(a, b) {
        return count[b] - count[a];
    });

    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(Number(numbers[i]));
    }

    return result;
};

// Problem 08 
/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = {};

    for (let num of nums) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    let numbers = Object.keys(count);

    numbers.sort(function(a, b) {
        return count[b] - count[a];
    });

    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(Number(numbers[i]));
    }

    return result;
};

// Problem 10 
/**
 * @param {number[]} nums
 * @return {void} 
 */
var sortColors = function(nums) {
    let zero = 0;
    let one = 0;
    let two = 0;

    for (let num of nums) {
        if (num === 0) {
            zero++;
        } else if (num === 1) {
            one++;
        } else {
            two++;
        }
    }

    let index = 0;

    while (zero > 0) {
        nums[index] = 0;
        index++;
        zero--;
    }

    while (one > 0) {
        nums[index] = 1;
        index++;
        one--;
    }

    while (two > 0) {
        nums[index] = 2;
        index++;
        two--;
    }
};