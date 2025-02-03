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

// 2. Case-insensitive and Special character palindrome check
function isPalindrome2(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome2("A man, a plan, a canal, Panama"));
console.log(isPalindrome2("Hello, world!"));

// Explanation:
// toLowerCase() converts all characters to lowercase.
// replace(/[^a-z0-9]/g, '') removes all non-alphanumeric characters.
// Cleaned string is reversed and compared with the original string.
