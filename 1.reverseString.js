function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(reverseString("Hello"));

// Explaination:
// Loop from the end: The for loop starts from the last character (str.length - 1) and goes to the first character (0).
// Build the reversed string: In each iteration of the loop, the current character is appended to the reversed string.
// Return the result: Once the loop completes, the string is reversed.

// Using in-built functions
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("Yash"));

// Explaination
// split(''): Converts the string into an array of characters.
// reverse(): Reverses the order of elements in the array.
// join(''): Joins the array elements back into a string.
