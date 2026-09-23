// 3. Create a Safe Rest Function
function average(...scores: number[]): number {
  if (scores.length === 0) return 0;
  
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Test cases with 3–5 values
console.log("--- Exercise 3.1 Results ---");
console.log("Average 1:", average(80, 90, 100));            // 3 values -> Output: 90
console.log("Average 2:", average(75, 85, 95, 88, 92));      // 5 values -> Output: 87