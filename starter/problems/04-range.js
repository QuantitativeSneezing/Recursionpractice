/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(num1, num2){
let array= [];
if (num2<=num1){
  return array;
}
array.push(num1)
return (array.concat(range(num1+1,num2)));
}

// your code here


console.log (range(1, 5), // [1, 2, 3, 4]
range(3, 4), // [3]
range(7, 6)) // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
