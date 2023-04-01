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

// console.log(pattern5(8));

function newPattern5(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

console.log(newPattern5(5));
