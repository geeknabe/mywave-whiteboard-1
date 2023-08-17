/**
 * Problem 3 - Fibonacci Sequence
 * Write a function that generate Fibonacci sequence using recursion technique.
 * Allow the user to specify the number of Fibonacci sequence elements to generate.
 *
 * Expected output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 *
 * Note:
 * Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
 * Bonus: How would you handle preventing a stack overflow exception
 * when generating a large sequence?
 */

/**
 * Extra Notes:
 * Recursion creates a stack call whereby the next function calls will be added to the top
 * of the stack. The top of the stack will get resolved first, and the resulting value
 * passed to the next stack, and the next, and the next until we reach the last stack
 * which resolves to our desired value.
 *
 * This is recursion, where it keeps adding to the stack call.
 */

const p3 = (totalSequence) => {
  const arr = [];

  /**
   * Returns the resulting addition of 2 preceding numbers from the given num
   * variable.
   * @param {Number} num
   */
  function fibonacci(num) {
    switch (num) {
      case 0:
      case 1:
        return num;
      default:
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }

  for (var i = 0; i < totalSequence; i++) {
    arr.push(fibonacci(i));
  }

  return arr;
};

/**
 * Bonus question: Use loop instead of recursion. Recursion easily causes stack overflow
 * because it keeps calling the function repeatedly (going deeper and deeper).
 */

const p3Bonus = (totalSequence) => {
  const arr = [];

  for (var i = 0; i < totalSequence; i++) {
    switch (i) {
      case 0:
      case 1:
        arr.push(i);
        break;
      default:
        arr.push(arr[i - 1] + arr[i - 2]);
        break;
    }
  }

  return arr;
};

// Alternative fibonacci
// Every loop, pop in the current n1 and n2. Then replaces n1 and n2 with the next set.
const p3_1 = (totalSequence) => {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  let arr = [];

  for (let i = 1; i <= totalSequence; i++) {
    arr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return arr;
};

console.log(p3_1(5));

module.exports = {
  p3,
  p3Bonus,
};
