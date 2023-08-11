const p1 = require('./p1');

test('P1: Returns array in ascending order', () => {
  expect(p1()).toStrictEqual([-36, -16, -3, 8, 21, 28, 55, 77, 99, 111, 400]);
});
