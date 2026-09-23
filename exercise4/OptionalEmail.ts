// 2. Extend User with Optional Property
interface UserWithEmail {
  username: string;
  password: string;
  email?: string; // Optional property
}

function loginWithEmail(user: UserWithEmail): void {
  console.log("--- Exercise 4.1 Login ---");
  console.log(`Username: ${user.username}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  } else {
    console.log("Email: Not provided");
  }
}

// User without email
const userNoEmail: UserWithEmail = {
  username: "jamal_guest",
  password: "pass123Guest"
};

// User with email
const userWithEmail: UserWithEmail = {
  username: "sabir_full",
  password: "pass456Full",
  email: "sabir@example.com"
};

// Calling the function both ways
loginWithEmail(userNoEmail);
loginWithEmail(userWithEmail);