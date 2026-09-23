// 1. Enum Definition
enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer"
}

// Function checking edit permissions
function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

// Test cases
console.log("--- Exercise 6.1 Results ---");
console.log("Can SuperAdmin edit?", canEdit(UserRole.SuperAdmin)); // true
console.log("Can Moderator edit?", canEdit(UserRole.Moderator));   // true
console.log("Can Viewer edit?", canEdit(UserRole.Viewer));         // false