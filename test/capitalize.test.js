import { capitalize } from '../src/capitalize';

// lower case first character
test('Capitalize test to Test', () => {
  expect(capitalize('test')).toBe('Test');
});

// upper case first character
test('Capitalize Test to Test', () => {
  expect(capitalize('Test')).toBe('Test');
});

// upper case succeeding character/s
test('Capitalize Test to Test', () => {
  expect(capitalize('tesT')).toBe('Test');
});

// not alphabetic first character
test('Capitalize 1Test to 1Test', () => {
  expect(capitalize('1Test')).toBe('1test');
});