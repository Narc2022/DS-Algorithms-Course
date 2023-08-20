// count unique numbers
// output -> 8
//condition
// i=0 j=1
// array[i] !== array[j]
//1. i++
//2. array[i] = array[j]
// Time Complexity : O(n)
const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 7, 7, 8, 10];
function countUniq(array) {
  let i = 0;
  if (array && array.length > 0) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}

const value = countUniq([]);
console.log("value", value);
