/**
 * Problem 1: Sorting
 * Given a list of random unordered numbers, write a function that sort them in ascending order.
 *
 * Input: 21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28
 *
 * Expected output: -36, -16, -3, 8, 21, 28, 55, 77, 99, 111, 400
 *
 * Note:
 * You are not allowed to use language library function to solve the problem.
 * Bonus: Prepare space-time complexity analysis for your solution.
 */

const p1 = () => {
  const arr = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];

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

  return arr;
};

/**
 * Big-O Notation: O(n^2)
 *
 * Given that the first loop run n times, the inner loop will run n times for every
 * run the first loop did. Even after taking into account the array value swap, O(n^2)
 * is still the bigger significant value.
 */

module.exports = p1;
