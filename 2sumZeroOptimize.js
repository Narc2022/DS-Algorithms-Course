//checking sum zero optimize complexity - Problem 2
// [?,?]
let array = [-5, -4, -3, -2, 0, 24, 4, 6, 56];
function findSumPair(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = findSumPair(array);
console.log("result", result);
