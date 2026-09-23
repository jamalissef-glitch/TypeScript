// 3. Interface with Readonly Property
interface UserWithReadonly {
  readonly id: number; // Cannot be changed after creation
  username: string;
  password: string;
  email?: string;
}

const userAccount: UserWithReadonly = {
  id: 1001,
  username: "sabir_admin",
  password: "superSecretPassword"
};

console.log("--- Exercise 4.2 Readonly Test ---");
console.log("Original User ID:", userAccount.id);

// ❌ Try to reassign id — TypeScript will throw a compile error:
// userAccount.id = 2002; 
// Error: Cannot assign to 'id' because it is a read-only property.

// Allowed reassignments for non-readonly fields:
userAccount.username = "sabir_super_admin";
console.log("Updated Username:", userAccount.username);