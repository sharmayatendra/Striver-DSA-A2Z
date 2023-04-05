/**
 * o/p:  1             1
 *       1 2         2 1
 *       1 2 3     3 2 1
 *       1 2 3 4 4 3 2 1
 */

function pattern12(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    //numbers;
    for (let j = 1; j <= i; j++) {
      str = str + j;
    }
    //space:
    for (let j = 1; j <= 2 * (n - i); j++) {
      str += " ";
    }
    for (let j = i; j >= 1; j--) {
      str = str + j;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern12(4));
