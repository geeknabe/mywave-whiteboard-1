/**
 * Problem 6 - Find Character with Maximum Occurrence
 * Write a function that takes a string as input and finds the character
 * that occurs the maximum number of times in the string.
 * Return both the character and its occurrence count.
 * If there are multiple characters with the same maximum occurrence, return any one of them.
 *
 * Input: "Hello, world!"
 *
 * Expected output: Character: 'l', Occurrence: 3
 *
 * Note:
 *
 * Consider case-sensitivity, so 'H' and 'h' are different characters.
 * The input string may contain whitespaces and punctuation. Ignore whitespaces and punctuation.
 *
 * Bonus: Handle Unicode characters correctly. Unicode characters refer to characters that are part
 * of the Unicode character set. The Unicode character set is a standard system that assigns a
 * unique numerical value (code point) to every character, including letters, numbers, symbols, and
 * special characters from various writing systems around the world. This includes characters from
 * languages like Chinese, Arabic, Hindi, Cyrillic, etc, as well as special characters and symbols
 * from various scripts.
 */

/**
 * Returns a string that informs the max occurrence of a character from the
 * given text variable, followed by the character itself.
 * Ignores basic punctuation and whitespace (Not exhaustive).
 * @param {String} text
 */
const p6 = (text) => {
  const textArr = text.split('');
  const occurrence = {};
  const arr = ['', 0];

  textArr.forEach((txt) => {
    const punctuationAndWhitespace = txt.match(/!|,|，|。|\t|\n|\s|\.|\?/g);

    if (!punctuationAndWhitespace) {
      const parsedTxt = txt.charCodeAt(0);
      occurrence[parsedTxt] = {
        originalTxt: txt,
        total: occurrence[parsedTxt]?.total
          ? occurrence[parsedTxt].total + 1
          : 1,
      };
    }
  });

  Object.keys(occurrence).forEach((key) => {
    const { originalTxt, total } = occurrence[key];

    if (arr[1] < total) {
      arr[1] = total;
      arr[0] = originalTxt;
    }
  });

  return `Character: '${arr[0]}', Occurrence: ${arr[1]}`;
};

module.exports = p6;
