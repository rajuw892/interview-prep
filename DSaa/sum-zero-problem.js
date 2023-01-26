//checking sum zero -Problem-1
//Find a pair in array which sum gives result of zero
//[-5,-4,-3,-2,0,2,4,6,8]
//[? ?]-> output

function getSumPairZero(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);
