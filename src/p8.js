/**
 * Problem 8 - Anagram Checker
 *
 * Write a function that takes two strings as input and checks if they are anagrams of
 * each other. Anagrams are words or phrases formed by rearranging the letters of
 * another word or phrase.
 *
 * Example 1:
 *
 * Input: "listen", "silent"
 * Expected output: true
 * Explanation: Both strings contain the same characters "l", "i", "s", "t", "e", and
 * "n" and have the same count for each character. Hence, they are anagrams of each
 * other.
 *
 * Example 2:
 *
 * Input: "debit card", "Bad credit"
 * Expected output: true
 * Explanation: After removing whitespace and ignore case sensitivity, both strings
 * contain the same characters "d", "e", "b", "i", "t", "c", "a", and "r" and have the
 * same count for each character. Hence, they are anagrams of each other.
 *
 * Example 3:
 *
 * Input: "hello", "bye"
 * Expected output: false
 * Explanation: Both strings contain different characters and have different lengths.
 * Hence, they are not anagrams of each other.
 *
 * Example 4:
 *
 * Input: "restful", "fluster"
 * Expected output: true
 * Explanation: Both strings contain the same characters "r", "e", "s", "t", "f", "u",
 * and "l".
 *
 * Example 5:
 *
 * Input: "listen", "silentt"
 * Expected output: false
 * Explanation: The first string contains the characters "l", "i", "s", "t", "e", and
 * "n", while the second string contains an extra "t". Hence, they are not anagrams of
 * each other.
 *
 * Example 6:
 *
 * Input: "Conversation", "Voices, rant on"
 * Expected output: true
 * Explanation: After removing whitespace and punctuation and ignore case sensitivity,
 * both strings contain the same characters "c", "o", "n", "v", "e", "r", "s", "a",
 * "t", "i", and "n" and have the same count for each character. Hence, they are
 * anagrams of each other, even though the second string has different words,
 * whitespaces, punctuation and cases.
 *
 * Note:
 * Ignore case sensitivity, so "Listen" and "silent" should be considered anagrams.
 * Ignore whitespace and punctuation from the anagram check.
 * Bonus: Prepare space-time complexity analysis for your solution.
 */

/**
 * Converts given str variable into an array, filter off whitespaces and punctuations (Not exhaustive)
 * and converts string to lowercase.
 * @param {String} str
 */
const parseTxt = (str) => {
  return str
    .split('')
    .filter((txt) => {
      return !txt.match(/\s|\t|\n|,/g);
    })
    .map((txt) => {
      return txt.toLowerCase();
    });
};

/**
 * Returns true if the given 2 string variables are anagrams.
 * 1. Both strings must have same character count
 * 2. Both strings must have same characters
 * @param {String} txt1
 * @param {String} txt2
 * @param {Boolean}
 */
const p8 = (txt1, txt2) => {
  const arr1 = parseTxt(txt1);
  const arr2 = parseTxt(txt2);

  const compareCharacters = arr1.filter((compareTxt1) => {
    let found = false;

    arr2.forEach((compareTxt2) => {
      if (compareTxt1 === compareTxt2) {
        found = true;
      }
    });

    return found;
  });

  return (
    compareCharacters.length > 0 &&
    compareCharacters.length === arr1.length &&
    compareCharacters.length === arr2.length
  );
};

module.exports = p8;

/**
 * Big O Notation: O(n^2 + 2n)
 *
 * The .filter method counts as a loop. Each loop has a Big O of O(n). Since this is a nested loop,
 * it should be O(n^2). There are also 2 independent loops (parseTxt function), so it totals up to n^2 + 2n
 * since 1 loop is only O(n).
 *
 * The if statement in the loop and the truthy condition statement is negligible.
 */
