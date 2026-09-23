// 3. First Element Function
function first<T>(items: T[]): T | undefined {
  return items[0];
}

// Test cases
const firstNumber = first<number>([10, 20, 30, 40]);
const firstString = first<string>(["Apple", "Banana", "Orange"]);
const firstObject = first<{ id: number; title: string }>([
  { id: 1, title: "Laptop" },
  { id: 2, title: "Mouse" }
]);

console.log("--- Exercise 5.2 Results ---");
console.log("First Number:", firstNumber);
console.log("First String:", firstString);
console.log("First Object Title:", firstObject?.title);