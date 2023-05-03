import { comparePassword, generatePassword } from '../index';

test('Generate Password Function', () => {
  expect(generatePassword('Test@123')).toBeTruthy();
});

test('Generate Password Negative', () => {
  expect(generatePassword('')).toBeInstanceOf(TypeError);
});

test('Compare Password', () => {
  expect(comparePassword('Test@123', 'svchdvdhvc')).toBe(false);
});

test('Compare Password Negative', () => {
  expect(comparePassword('Test@123', '')).toBeInstanceOf(TypeError);
});
