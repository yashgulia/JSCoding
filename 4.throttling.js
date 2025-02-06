// Throttling limits the number of times a function is executed over a certain time period.

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Simulated scroll event function
function handleScroll() {
  console.log("Scroll event fired at:", Date.now());
}

// Creating a throttled version of handleScroll
const throttledScroll = throttle(handleScroll, 1000);

// Simulating fast scroll events
setInterval(() => {
  throttledScroll(); // This runs only once every 1000ms, even if triggered more frequently
}, 200);

// How it works?
// The function runs at most once every 1000ms.
// If another event happens before 1000ms, it is ignored.
// Helps reduce function calls while still allowing periodic execution.

// Best Use Cases:
// Scroll events
// Button spam prevention
// API polling
