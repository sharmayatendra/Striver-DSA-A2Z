/*
o/p: 1 2 3 4 5
     1 2 3 4
     1 2 3
     1 2
     1 
*/

function pattern6(n) {
  let str = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str = str + j + " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern6(5));
