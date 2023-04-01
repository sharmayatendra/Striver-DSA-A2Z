/*
o/p: * * * * *
     * * * *
     * * *
     * *
     * 
*/

function pattern5(n) {
  let num = "";
  for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      num += "* ";
    }
    num += "\n";
  }
  return num;
}

console.log(pattern5(8));
