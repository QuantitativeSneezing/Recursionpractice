/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  let newArr = [];
//   if (arr.length === 0) {
//     return [];
//   }

//  if (arr.length > 0) {
//   if (Array.isArray(arr[0])) {
//     debugger
//     newArr.concat(...flatten(arr[0]));
//   } else {
//     debugger
//     newArr.push(arr.shift())
//   }
//  }

 arr.forEach(function (contents) {
  if (Array.isArray(contents)) {
    newArr.push(...flatten(contents));
  } else {
    newArr.push(contents);
  }
 });

  return newArr;
}


console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
