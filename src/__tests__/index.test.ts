import { testFunction } from '../index';

test('Test Function', () => {
  expect(testFunction('user')).toBe('Hello user');
});
