/**
 * o/p:        *
 *             * *
 *             * * *
 *             * * * *
 *             * * * * *
 *             * * * *
 *             * * *
 *             * *
 *             *
 */

function pattern10(n) {
  let str = "";
  for (let i = 0; i < 2 * n; i++) {
    let star = i;
    if (i > n) star = 2 * n - i;
    for (let j = 0; j < star; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern10(5));
