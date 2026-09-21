// Bayaaninta array kaliya qaadan kara strings
let products: string[] = ["Phone", "Laptop"];

// Ku darida string waa sax:
products.push("Tablet");

// --- Tijaabinta nooc aan string ahayn (Compile Error) ---
// products.push(99); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Waxaa sidoo kale error ku siinaya haddii aad bilowgiiba nambar ku qorto:
// let products: string[] = ["Phone", "Laptop", 99]; // Error!

console.log("Products:", products);