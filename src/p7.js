/**
 * Problem 7 - Square Root
 * Write a function that calculates and returns the square root of a non-negative
 * integer x. You can safely assume x is a perfect square, such as 4, 9, 16, 25, 36,
 * and so on.
 *
 * Note:
 *
 * You are not allowed to use any built-in square root function or language library
 * function to solve the problem.
 * Bonus: Prepare space-time complexity analysis for your solution.
 */

/**
 * Returns square root of the num variable.
 * @param {Number} num
 */
const p7 = (num) => {
  let found = 0;

  for (var i = 0; i < num; i++) {
    const result = i * i;

    if (result === num) {
      found = i;
      break;
    }
  }

  return found;
};

module.exports = p7;

/**
 * Big O Notation: O(n)
 *
 * The if statement has no effect on the complexity, thus it is O(1).
 * Given that the loop run n times and should be the only algorithm taken
 * into account, this script's big o notation is O(n).
 *
 */
