// 1. Echo Function with Generics
function echo<T>(input: T): T {
  return input;
}

// Test cases with different types
const strEcho = echo<string>("TypeScript Generics");
const numEcho = echo<number>(2026);
const arrEcho = echo<string[]>(["React", "Node", "TypeScript"]);
const objEcho = echo<{ name: string; role: string }>({ name: "Sabir", role: "Developer" });

console.log("--- Exercise 5.1 Results ---");
console.log("String Echo:", strEcho.toUpperCase()); // String autocomplete works!
console.log("Number Echo:", numEcho.toFixed(2));   // Number autocomplete works!
console.log("Array Echo:", arrEcho.join(", "));    // Array autocomplete works!
console.log("Object Echo:", objEcho.name);         // Object autocomplete works!