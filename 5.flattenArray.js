function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i])); // Recursively flatten
    } else {
      result.push(arr[i]); // Push non-array elements
    }
  }

  return result;
}

// Example
const nestedArray = [1, [2, [3, [4, 5]], 6], 7];
console.log(flattenArray(nestedArray));

// Using Stack
function flattenArray1(arr) {
  let result = []; // Step 1: Initialize an empty array to store flattened values.
  let stack = [...arr]; // Step 2: Initialize a stack with a copy of the input array.

  while (stack.length) {
    // Step 3: Loop until the stack is empty.
    let last = stack.pop(); // Step 4: Remove the last element from the stack.

    if (Array.isArray(last)) {
      // Step 5: If the element is an array,
      stack.push(...last); // Step 6: Spread its elements and push them back into the stack.
    } else {
      result.unshift(last); // Step 7: If it’s not an array, add it to the front of the result array.
    }
  }

  return result; // Step 8: Return the flattened array.
}

// Example
const nestArray = [1, [2, [3, [4, 5]], 6], 7];
console.log(flattenArray1(nestedArray));

// Reduce Method
function flattenArray3(arr) {
  return arr.reduce((acc, val) => {
    // Step 1: Start with an empty accumulator array.
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val); // Step 2: Recursively flatten if array, otherwise add to accumulator.
  }, []);
}

// Example
const nesArray = [1, [2, [3, [4, 5]], 6], 7];
console.log(flattenArray3(nestedArray));
