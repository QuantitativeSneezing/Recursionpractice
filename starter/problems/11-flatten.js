/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/


/*
 while (arr.length > 0) {
  let newVar = arr[0];
  if (Array.isArray(newVar)) {
    console.log(newVar)
    newArr.concat(...flatten(newVar));
  } else {
    debugger
    newArr.push(arr.shift())
    newVar = arr[0];
    console.log(newVar)
  }
 }
*/

function flatten(arr, newArr = []) {

  if (!arr.length) {
    return newArr;
  }

  let variable = arr.shift();

  if (Array.isArray(variable)) {
    newArr.push(...flatten(variable));
  } else {
    newArr.push(variable);
  }

  return flatten(arr, newArr)

}


/*
 arr.forEach(function (contents) {
  if (Array.isArray(contents)) {
    newArr.push(...flatten(contents));
  } else {
    newArr.push(contents);
  }
 });
*/



console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
