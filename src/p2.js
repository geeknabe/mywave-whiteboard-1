/**
 * Problem 2 - FizzBuzz
 * Given a list of ordered numbers from 1 to 100, perform the following actions
 *
 * For every number divisible by 3, print 'Fizz'
 * For every number divisible by 5, print 'Buzz'
 * For every number divisible by both 3 and 5, print 'FizzBuzz'
 *
 * Input: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ..., 100
 * Expected output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, ..., 100
 * */

const p2 = () => {
  const arr = [];

  for (var i = 1; i <= 100; i++) {
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      arr.push('FizzBuzz');
    } else if (divisibleBy3) {
      arr.push('Fizz');
    } else if (divisibleBy5) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }

  return arr;
};

module.exports = p2;
