const checkArmstrongNum = (n) => {
  let count = 0;
  let num = n;
  let original = n;
  let val = 0;
  // n = 153
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  while (num !== 0) {
    let unit = num % 10;
    num = Math.floor(num / 10);
    val += Math.pow(unit, count);
  }
  if (val === original) return true;
  else return false;
};

console.log(checkArmstrongNum(170));
