// 1. Samaynta Tuple ka kooban: [string, number, number]
let location: [string, number, number];

// --- Tijaabinta Tartibta Saxda ah (Correct Order) ---
location = ["Mogadishu", 2.0371, 45.3438]; // Waa sax!

// --- Tijaabinta Tartibta Qaldan (Incorrect Orders) ---

// Tartib qaldan 1: Latitude-ka oo la hor mariyay
// location = [2.0371, "Mogadishu", 45.3438];
// Error: Type 'number' is not assignable to type 'string'.

// Tartib qaldan 2: Qodobo ka yar ama ka badan intii loo baahnaa
// location = ["Mogadishu", 2.0371];
// Error: Source has 2 element(s) but target requires 3.

console.log("City:", location[0]);
console.log("Latitude:", location[1]);
console.log("Longitude:", location[2]);