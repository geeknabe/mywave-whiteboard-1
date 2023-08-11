const { p3, p3Bonus } = require('./p3');

const totalSequence = 5;
test(`P3: Returns Fibonacci numbers for ${totalSequence} sequence`, () => {
  expect(p3(totalSequence)).toStrictEqual([0, 1, 1, 2, 3]);
});

test(`P3 (Bonus): Returns Fibonacci numbers for ${totalSequence} sequence`, () => {
  expect(p3Bonus(totalSequence)).toStrictEqual([0, 1, 1, 2, 3]);
});
