const p8 = require('./p8');

describe('P8: Checks if the two given strings are anagrams', () => {
  test('listen, silent return true', () => {
    expect(p8('listen', 'silent')).toBe(true);
  });

  test('debit card, Bad credit return true', () => {
    expect(p8('debit card', 'Bad credit')).toBe(true);
  });

  test('hello, bye return false', () => {
    expect(p8('hello', 'bye')).toBe(false);
  });

  test('restful, fluster return true', () => {
    expect(p8('restful', 'fluster')).toBe(true);
  });

  test('listen, silentt return false', () => {
    expect(p8('listen', 'silentt')).toBe(false);
  });

  test('"Conversation, Voices, rant on return true', () => {
    expect(p8('Conversation', 'Voices, rant on')).toBe(true);
  });
});
