// Problem 01

/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
}

// problem 02 

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}


// problem 03 

 /**
  * @param {string} str
  * @return {boolean}
  */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}


// problem 04 

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    if (!Array.isArray(nums)) {
        return 0;
    }

    return nums.reduce((sum, num) => {
        return sum + num;
    }, 0);
}

sumArray([10, 20, 30, 40]);

// problem 05 

/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
}

countVowels("javascript");

// problem 06 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        seen.set(nums[i], i);
    }

    return [];
}

//problem 07 

/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    const result = [];

    function flatten(items) {
        for (const item of items) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                result.push(item);
            }
        }
    }

    flatten(arr);

    return result;
}

// problem 08 

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const groups = new Map();

    for (const str of strs) {
        const key = str.split("").sort().join("");

        if (!groups.has(key)) {
            groups.set(key, []);
        }

        groups.get(key).push(str);
    }

    return Array.from(groups.values());
}

//problem 09 

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    const seen = new Set();

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);

        const currentLength = right - left + 1;

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

// problem 10 

/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    let newObj = {};

    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            newObj[key] = deepClone(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}



const obj = {
  a: 1,
  b: {
    c: 2,
  },
};