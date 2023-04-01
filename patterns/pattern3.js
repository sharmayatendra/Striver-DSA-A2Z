/*
o/p: 1
     1 2
     1 2 3
     1 2 3 4
*/

function pattern3(n) {
  let num = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < i + 1; j++) {
      num = num + j + " ";
    }
    num += "\n";
  }
  return num;
}

console.log(pattern3(4));
