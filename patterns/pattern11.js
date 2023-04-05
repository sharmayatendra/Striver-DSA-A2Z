/**
 * o/p:  1
 *       0 1
 *       1 0 1
 *       0 1 0 1
 *       1 0 1 0 1
 */

function pattern11(n) {
  let str = "";
  let num = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) num = 1;
    else num = 0;
    for (let j = 0; j <= i; j++) {
      str = str + num + " ";
      num = 1 - num;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern11(5));
