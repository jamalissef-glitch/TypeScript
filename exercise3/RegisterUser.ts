// 2. Optional and Default Parameters
function registerUser(username: string, isAdmin?: boolean, language: string = "en"): void {
  console.log("--- Exercise 3.4 Results ---");
  console.log(`Username: ${username}`);
  console.log(`Is Admin: ${isAdmin ? "Yes" : "No"}`);
  console.log(`Language: ${language}`);
}

// Test cases
registerUser("sabir123");                       // Uses default language 'en', isAdmin is undefined
registerUser("admin_jamal", true, "so");        // Explicitly passes all parameters