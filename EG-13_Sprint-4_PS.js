/**
problem 01 
 *
 * @format
 */

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s.length; i++) {
    let char1 = s[i];
    let char2 = t[i];

    if (map1[char1] && map1[char1] !== char2) {
      return false;
    }

    if (map2[char2] && map2[char2] !== char1) {
      return false;
    }

    map1[char1] = char2;
    map2[char2] = char1;
  }

  return true;
};

/**
 * problem 02
 */
var wordPattern = function (pattern, s) {
  let words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (map1[char] && map1[char] !== word) {
      return false;
    }

    if (map2[word] && map2[word] !== char) {
      return false;
    }

    map1[char] = word;
    map2[word] = char;
  }

  return true;
};

/**
probllem 03 
*/
var findTheDifference = function (s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result ^= s.charCodeAt(i);
  }

  for (let i = 0; i < t.length; i++) {
    result ^= t.charCodeAt(i);
  }

  return String.fromCharCode(result);
};

/**
 Problem 04 
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;

    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
};

/**
problem 05 
*/
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

/**
problem 06
*/
var productExceptSelf = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product = product * nums[j];
      }
    }

    result.push(product);
  }

  return result;
};

/**
problem 07
 */
var removeNthFromEnd = function (head, n) {
  let dummy = {
    next: head,
  };

  let first = dummy;
  let second = dummy;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
};

/**
 * problem 08 
 */
var searchRange = function (nums, target) {
  let start = -1;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (start === -1) {
        start = i;
      }

      end = i;
    }
  }

  return [start, end];
};

/**
 * problem 09 
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < s1.length; i++) {
    count1[s1[i]] = (count1[s1[i]] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    let char = s2[i];

    count2[char] = (count2[char] || 0) + 1;

    if (i >= s1.length) {
      let oldChar = s2[i - s1.length];

      count2[oldChar]--;

      if (count2[oldChar] === 0) {
        delete count2[oldChar];
      }
    }

    if (JSON.stringify(count1) === JSON.stringify(count2)) {
      return true;
    }
  }

  return false;
};

/**
  problem 10
 */
var findAnagrams = function (s, p) {
  let result = [];

  if (p.length > s.length) {
    return result;
  }

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < p.length; i++) {
    count1[p[i]] = (count1[p[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    count2[char] = (count2[char] || 0) + 1;

    if (i >= p.length) {
      let oldChar = s[i - p.length];

      count2[oldChar]--;

      if (count2[oldChar] === 0) {
        delete count2[oldChar];
      }
    }

    if (JSON.stringify(count1) === JSON.stringify(count2)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
};
