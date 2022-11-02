// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity; 
  max = -Infinity;
  sum = 0;
  avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min:min, max:max, avg:avg };



  // Ваш код

}

// Задание 2
  function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
 }

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let maxMass = 0;

  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++) {
    maxMass = func(arrOfArr[i]);
    if (maxMass > max) {
      max = maxMass;
    }
 }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  return Math.abs(getArrayParams(arr).max - getArrayParams(arr).min);
}
