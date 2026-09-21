// 1. Bayaaninta Arrays-ka (Typed Arrays)
let names: string[] = ["Axmed", "Aamino", "Cali"];
let grades: number[] = [85, 90, 78];
let status: boolean[] = [true, false, true];

// --- Tijaabinta ku riixida nooc qaldan (Pushing wrong types) ---

// names.push(100); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// grades.push("Pass"); 
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// status.push(1); 
// Error: Argument of type 'number' is not assignable to parameter of type 'boolean'.

// --- Qaabka Saxda ah ee lagu PUSH gareeynayo ---
names.push("Saciid");
grades.push(95);
status.push(false);

console.log("Names:", names);
console.log("Grades:", grades);
console.log("Status:", status);