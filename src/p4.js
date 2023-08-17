/**
 * Problem 4 - Find List Intersection
 * Write a function that find the intersection between two lists.
 *
 * List 1: 4, 5, 2, 3, 1, 6
 *
 * List 2: 8, 7, 6, 9, 4, 5
 *
 * Expected output: 4, 5, 6
 *
 * Note: You are not allowed to use language library function to solve the problem.
 * Bonus: Prepare space-time complexity analysis for your solution.
 */

const p4 = (firstArr, secondArr) => {
  const intersection = [];

  for (var i = 0; i < firstArr.length; i++) {
    const curr = firstArr[i];
    for (var j = 0; j < secondArr.length; j++) {
      const inner = secondArr[j];

      if (curr === inner) {
        intersection.push(curr);
      }
    }
  }

  return intersection;
};

module.exports = p4;

/**
 * Big O Notation: O(n^2)
 * Given that the first loop runs for n times, the inner loop will run n times for every n times
 * the first loop runs. This is similar to p1.js
 */

/**
 * Alternative solution
 */
const p4_1 = (firstArr, secondArr) =>
  firstArr.filter((element) => secondArr.includes(element));

/**
 * Alternative solution
 */
const p4_2 = (firstArr, secondArr) => {
  var arr = [];

  for (var i = 0; i < firstArr.length; i++) {
    if (secondArr.indexOf(firstArr[i]) > -1) {
      arr.push(firstArr[i]);
    }
  }

  return arr;
};

console.log(p4_2([4, 5, 2, 3, 1, 6], [8, 7, 6, 9, 4, 5]));
