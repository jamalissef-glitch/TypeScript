// 1. Define a User Interface
interface User {
  readonly id: number;
  name: string;
  email: string;
  age?: number; // Optional parameter
}

const userProfile: User = {
  id: 101,
  name: "Sabir Ibrahim",
  email: "sabir@example.com"
};

console.log("--- Exercise 3.5 Results ---");
console.log("User Profile:", userProfile);