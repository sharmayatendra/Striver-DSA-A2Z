/*
o/p: 1
     2 2
     3 3 3
     4 4 4 4
*/

function pattern4(n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i + 1; j++) {
      num = num + i + " ";
    }
    num += "\n";
  }
  return num;
}

console.log(pattern4(4));
