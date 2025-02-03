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

// 3. Two pointer approach
function isPalindrome3(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome3("racecar"));
console.log(isPalindrome3("hello"));

// Explanation:
// Uses two pointers: one at the start (left), one at the end (right).
// Moves inward while comparing characters.
// Exits early if characters don't match, making it more efficient.

// 4. Recursive approach
function isPalindromeRecursive(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindromeRecursive(str, left + 1, right - 1);
}

console.log(isPalindromeRecursive("racecar"));
console.log(isPalindromeRecursive("hello"));

// Explanation:
// Recursively checks characters from both ends.
// Base case: If pointers meet or cross, it's a palindrome.
// Moves inward while comparing characters.

// 5. Finding all palindromes in a sentence
function findPalindromes(sentence) {
  return sentence
    .toLowerCase()
    .match(/\b[a-z0-9]+\b/g)
    .filter((word) => word === word.split("").reverse().join(""));
}

console.log(findPalindromes("A man, a plan, a canal, Panama"));
console.log(findPalindromes("Wow, racecar and level are palindromes!"));

// Explanation:
// Breakdown of /\b[a-z0-9]+\b/g
// / ... /g → The slashes /.../ define a regular expression, and the g flag means global search, meaning it will find all matches, not just the first one.
// \b (Word Boundary) → Ensures that the match is a whole word, not part of another word.
// [a-z0-9] → Matches any lowercase letter (a-z) or digit (0-9).
// + → Means one or more of the preceding character class [a-z0-9], so it ensures we capture whole words, not just single characters.
// \b (Word Boundary Again) → Ensures that the match ends at a word boundary.
