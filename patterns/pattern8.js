/*
o/p: * * * * * * * * *
       * * * * * * *
         * * * * * 
           * * *
             * 
*/

/**
 * [space, star, space]
 *  0    ,   9 ,   0
 *  1    ,   7 ,   1
 *  2    ,   5 ,   2
 *  3    ,   3 ,   3
 *  4    ,   1 ,   4
 */
// logic for star: 2*n - 1 - 2* i

function pattern8(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    //space
    for (let j = 0; j <= i; j++) {
      str += " ";
    }
    // star
    for (let j = 0; j < 2 * n - 1 - 2 * i; j++) {
      str += "*";
    }
    //space
    for (let j = 0; j <= i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern8(5));
