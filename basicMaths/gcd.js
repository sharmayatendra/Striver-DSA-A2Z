function findGCD(num1, num2) {
  let rem;
  if (num1 > num2) {
    if (num1 % num2 === 0) rem = num2;
    while (num1 % num2 !== 0) {
      rem = num1 % num2;
      num1 = num2;
      num2 = rem;
    }
  } else {
    if (num2 % num1 === 0) rem = num1;
    while (num2 % num1 !== 0) {
      rem = num2 % num1;
      num2 = num1;
      num1 = rem;
    }
  }
  return rem;
}

console.log(findGCD(111, 11));
