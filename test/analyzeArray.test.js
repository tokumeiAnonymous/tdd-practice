import { analyzeArray } from '../src/analyzeArray';

test('Analyze small numbers', () => {
  expect(analyzeArray([1, 2, 3, 4]).average).toBe(2.5);
  expect(analyzeArray([1, 2, 3, 4]).min).toBe(1);
  expect(analyzeArray([1, 2, 3, 4]).max).toBe(4);
  expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
  expect(analyzeArray([1, 2, 3, 4])).toEqual({ average: 2.5, min: 1, max: 4, length: 4});
});