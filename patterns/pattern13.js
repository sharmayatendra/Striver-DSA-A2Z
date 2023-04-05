/**
 * o/p:    1
 *         2 3
 *         4 5 6
 *         7 8 9 10
 *         11 12 13 14 15
 */

function pattern13(n) {
  let str = "";
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str = str + num + " ";
      num = num + 1;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern13(5));
