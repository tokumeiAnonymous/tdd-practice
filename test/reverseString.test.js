import { reverseString } from '../src/reverseString';

// simple string
test('Reverse test to be tset', () => {
  expect(reverseString('test')).toBe('tset');
});

// long string with spaces
test('Reverses a long string with spaces', () => {
  expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
});