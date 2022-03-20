import { caesarCipher } from '../src/caesarCipher';

test('Encrypt a word with all lowercase letters', () => {
  expect(caesarCipher('abcdef', 1)).toBe('bcdefg');
});

test('Encrypt a word with that should circle back to a', () => {
  expect(caesarCipher('abcdez', 1)).toBe('bcdefa');
});

test('Encrypt a word with none alphabetic element', () => {
  expect(caesarCipher('_abc!ez', 1)).toBe('_bcd!fa');
});

test('Encrypt a word with negative shift count that should circle back to z', () => {
  expect(caesarCipher('_abc!ez', -1)).toBe('_zab!dy');
});