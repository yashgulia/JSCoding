// ******** With Inbuilt Functions *********

// 1. A string is a palindrome if it reads the same backward as forward.
function isPalindrome1(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome1("racecar"));
console.log(isPalindrome1("hello"));

// Explanation:
// split('') converts the string into an array of characters.
// reverse() reverses the array.
// join('') converts the array back into a string.
// The original string is compared with the reversed string.
