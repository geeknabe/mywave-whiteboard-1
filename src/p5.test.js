const p5 = require('./p5');

test('P5: Returns symmetric difference between two lists', () => {
  const firstArr = [4, 5, 2, 3, 1, 6];
  const secondArr = [8, 7, 6, 9, 4, 5];

  expect(p5(firstArr, secondArr)).toStrictEqual([1, 2, 3, 7, 8, 9]);
});
