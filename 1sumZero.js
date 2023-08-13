//checking sum zero - Problem 1
// --> input
//quadratic complexity
//[?,?] - output ?

let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
function getSumPairZero(array) {
  for (let number of array) {
    for (i = 1; i < array.length; i++) {
      if (number + array[i] === 0) {
        return [number, array[i]];
      }
    }
  }
}

const result = getSumPairZero(array);
console.log("result", result);

//Time Complexity (On)
