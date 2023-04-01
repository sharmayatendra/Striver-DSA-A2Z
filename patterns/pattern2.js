/*
o/p: *
     * *
     * * *
     * * * *
     * * * * *
*/

function pattern2(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern2(5));
