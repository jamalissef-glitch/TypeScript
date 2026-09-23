// 2. Type Aliases
type ID = string | number;

type Product = {
  id: ID;
  title: string;
  price: number;
};

const item1: Product = { id: "PROD-001", title: "Keyboard", price: 45 };
const item2: Product = { id: 102, title: "Mouse", price: 25 };

console.log("--- Exercise 3.3 Results ---");
console.log("Item 1:", item1);
console.log("Item 2:", item2);