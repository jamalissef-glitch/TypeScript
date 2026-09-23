// 1. Define an Interface
interface User {
  username: string;
  password: string;
}

// Function to handle login
function login(user: User): void {
  console.log("--- Exercise 4.3 Login ---");
  console.log(`User ${user.username} successfully logged in!`);
}

// Valid user object
const validUser: User = {
  username: "sabir_dev",
  password: "securePassword123"
};

// Calling the function
login(validUser);