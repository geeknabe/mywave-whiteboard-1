const p4 = require('./p4');

test('P4: Returns intersection between two lists', () => {
  const firstArr = [4, 5, 2, 3, 1, 6];
  const secondArr = [8, 7, 6, 9, 4, 5];

  expect(p4(firstArr, secondArr)).toStrictEqual([4, 5, 6]);
});
