function compareArrays(arr1, arr2) {
  let result = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i])

  // Ваш код

  return result(arr1, arr2); // boolean
}
function advancedFilter(arr) {
  let resultArr = arr.filter(arr3 => arr3 >= 0 ).filter(arr4 => arr4 % 3 === 0).map(arr4 => arr4 * 10 );

  // Ваш код

  return resultArr; // array
}
