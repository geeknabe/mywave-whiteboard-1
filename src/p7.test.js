const p7 = require('./p7');

const num = 25;
test(`P7: Returns square root of the number ${num}`, () => {
  expect(p7(num)).toBe(5);
});
