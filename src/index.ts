import { TestFunction } from './types';

export const testFunction: TestFunction = (text) => {
  return `Hello ${text}`;
};

export * from './lib/isEmpty';
export * from './lib/bcrypt';
export * from './lib/crypto';
