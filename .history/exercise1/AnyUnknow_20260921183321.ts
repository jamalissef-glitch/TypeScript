function printLength(x: string | number): void {
  if (typeof x === "string") {
    // TypeScript halkan wuxuu ka ogaaday in x uu yahay string
    console.log(x.length);
  } else {
    // Haddii uu nambar yahay, doolar/crash dhici maayo
    console.log("Input-ku ma laha .length property (Nambar ayaa soo galay).");
  }
}

// Tijaabinta:
printLength("Hello"); // Output: 5 Sida ka rabno 
printLength(123);     // Output: Input-ku  crash aya dhici dona