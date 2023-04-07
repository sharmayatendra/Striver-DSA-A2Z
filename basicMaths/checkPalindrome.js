function checkPalindrome(x) {
  let reverseNum = 0;
  let originalNumber = x;
  if (x < 0) return false;
  while (x !== 0) {
    let unitDigit = x % 10;
    reverseNum = reverseNum * 10 + unitDigit;
    x = Math.floor(x / 10);
  }
  return reverseNum === originalNumber ? true : false;
}

console.log(checkPalindrome(-121));
