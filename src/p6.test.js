const p6 = require('./p6');

test('P6: Returns max character occurrence, along with the character', () => {
  expect(p6('Hello, world!')).toBe(`Character: 'l', Occurrence: 3`);
});
