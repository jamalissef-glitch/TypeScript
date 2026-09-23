// 2. Type Assertion for DOM Element
// document.querySelector by default returns Element | null.
// Using 'as HTMLButtonElement' tells TypeScript the exact HTML element type.

const submitButton = document.querySelector("#submit-btn") as HTMLButtonElement;

// If button exists, set its disabled property to true
if (submitButton) {
  submitButton.disabled = true;
  console.log("Submit button has been disabled.");
}