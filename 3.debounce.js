//  Debouncing is a technique where you delay the execution of a function until after a certain amount of time has passed.

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // Reset timer if function is called again
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Simulated API call (prints to console)
function searchQuery(query) {
  console.log("Searching for:", query);
}

// Creating a debounced version of searchQuery
const debouncedSearch = debounce(searchQuery, 500);

// Simulating fast user typing
debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello"); // <- Only this call will execute after 500ms

// How it works?
// The function waits 500ms after the last keystroke before executing.
// If a new keystroke happens within 500ms, the timer resets.
// Only the last input is processed, reducing API calls.

// Best Use Cases:
// Search inputs
// Window resize events
// Auto-save features
