import { calculator } from '../src/calculator';

test('Add', () => {
  expect(calculator().add(3, 4)).toBe(7);
});

test('Subtract', () => {
  expect(calculator().subtract(3, 4)).toBe(-1);
});

test('Multiply', () => {
  expect(calculator().multiply(3, 4)).toBe(12);
});

test('Divide', () => {
  expect(calculator().divide(3, 4)).toBe(0.75);
});

test('Divide by 0', () => {
  expect(calculator().divide(3, 0)).toBe(undefined);
});