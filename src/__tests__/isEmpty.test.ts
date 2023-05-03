import { isEmpty } from '../index';

test('Is Empty as string', () => {
  expect(isEmpty('abcdefghi')).toBe(false);
});

test('Is Empty as string', () => {
  expect(isEmpty('')).toBe(true);
});

test('Is Empty as array', () => {
  expect(isEmpty([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false);
});

test('Is Empty as array', () => {
  expect(isEmpty([])).toBe(true);
});

test('Is Empty as object', () => {
  expect(isEmpty({ a: 1, b: 2, c: 3, d: 4, e: 5 })).toBe(false);
});

test('Is Empty as object', () => {
  expect(isEmpty({})).toBe(true);
});

test('Is Empty as number', () => {
  expect(isEmpty(9876)).toBe(false);
});
test('Is Empty as number', () => {
  expect(isEmpty('')).toBe(true);
});
