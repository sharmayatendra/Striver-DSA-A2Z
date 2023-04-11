const printAllDivisor = (n) => {
  console.log(`The Divisors of ${n} are:`);
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i + " ");
    }
  }
  console.log("\n");
};

// printAllDivisor(36);

// TC: O(sqrt(n)), SC: O(1)
const printAllDivisorOptimal = (n) => {
  console.log(`The Divisors of ${n} are:`);
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(i + " ");
      if (i !== n / i) {
        console.log(n / i + " ");
      }
    }
  }
  console.log("\n");
};

printAllDivisorOptimal(36);
