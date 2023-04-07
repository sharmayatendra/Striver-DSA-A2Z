// Reverse Integer: leetcode - 7

function reverseNum(num) {
  let reverseNum = 0;
  let unitDigit;
  let originalNumber = num;
  if (num < 0) num = Math.abs(num);
  while (num !== 0) {
    unitDigit = num % 10;
    reverseNum = unitDigit + reverseNum * 10;
    num = Math.floor(num / 10);
  }
  return originalNumber < 0 ? -reverseNum : reverseNum;
}

console.log(reverseNum(-1234));
