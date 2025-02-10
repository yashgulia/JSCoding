function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Example
let obj1 = { name: "John", address: { city: "New York" } };
let obj2 = deepClone(obj1);
obj2.address.city = "Los Angeles";

console.log(obj1.address.city);
