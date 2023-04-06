// Problem Statement: Given an integer N , write program to count number of digits in N.

// 49%2 = 1

function countDigits(num) {
  let count = 0;
  while (num !== 0) {
    num = Math.floor(Math.abs(num / 10));
    count++;
  }
  return count;
}

console.log(countDigits(-1234));
