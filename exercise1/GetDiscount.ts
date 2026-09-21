function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

// Tusaale isticmaal:
const finalPrice = getDiscount(100, 0.2); // Returns 80
console.log(finalPrice);