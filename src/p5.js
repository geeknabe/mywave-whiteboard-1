/**
 * Problem 5 - Find List Symmetric Difference
 * Write a function that find the symmetric difference between two lists.
 *
 * List 1: 4, 5, 2, 3, 1, 6
 *
 * List 2: 8, 7, 6, 9, 4, 5
 *
 * Expected output: 1, 2, 3, 7, 8, 9
 *
 * Note:
 *
 * You are not allowed to use language library function to solve the problem.
 * Bonus: Prepare space-time complexity analysis for your solution.
 */

/**
 * Compares and returns the difference between arr1 and arr2 in a new list.
 * @param {Array<Number>} arr1
 * @param {Array<Number>} arr2
 */
function findDiff(arr1, arr2) {
  const arr = [];

  for (var i = 0; i < arr1.length; i++) {
    const curr = arr1[i];
    let found = false;

    for (var j = 0; j < arr2.length; j++) {
      const inner = arr2[j];

      if (curr === inner) {
        found = true;
      }
    }

    if (found === false) {
      arr.push(curr);
    }
  }

  return arr;
}

/**
 * Returns a sorted array by ascending number
 * @param {Array<Number>} arr
 */
function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currLoop = arr[i];
      const innerLoop = arr[j];

      if (currLoop > innerLoop) {
        arr[i] = innerLoop;
        arr[j] = currLoop;
      }
    }
  }
}

const p5 = (firstArr, secondArr) => {
  const diff = [
    ...findDiff(firstArr, secondArr),
    ...findDiff(secondArr, firstArr),
  ];
  sortArr(diff);

  return diff;
};

module.exports = p5;

/**
 * Big O Notation: O(3n^2)
 *
 * Given that each loop is a nested loop, these loops each have a O(n^2).
 * Given that the first loop run n times, the inner loop will run n times for every loop the
 * first loop runs. This returns O(n^2).
 *
 * This script has 3 independent loops, thus O(3n^2)
 */

const p5_1 = (firstArr, secondArr) => [
  ...firstArr.filter((x) => !secondArr.includes(x)),
  ...secondArr.filter((x) => !firstArr.includes(x)),
];

console.log(p5_1([1, 2, 3], [2, 3, 5]));
