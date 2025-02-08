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
