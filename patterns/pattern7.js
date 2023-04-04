/*
o/p:      *
        * * *
      * * * * * 
    * * * * * * *
  * * * * * * * * *
*/

// logic: [space, stars, space]
// n = 5,  0    , 9   , 0
//  n = 4,  1    , 7   , 1
//  n = 3,  2    , 5   , 2
//  n = 2,  3    , 3   , 3
//  n = 1,  4    , 1   , 4

function pattern7(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    // space:
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }

    // stars:
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    // space:
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern7(5));

function newPattern7(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    // space:
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }

    // stars:
    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }

    // space:
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

console.log(newPattern7(5));
