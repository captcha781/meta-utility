import { CryptoJs } from '../index';

const cryptoJs = new CryptoJs('xdbeubcbru83njhfb%mvi*#bcu');

test('Test Encrypt JS', () => {
  expect(cryptoJs.encryptJs('Test String')).toBeTruthy();
});

test('Test Encrypt JS', () => {
  expect(cryptoJs.encryptJs('')).toBeInstanceOf(TypeError);
});

test('Test Encrypt String', () => {
  expect(cryptoJs.encryptJs('')).toBeInstanceOf(TypeError);
});

test('Test Encrypt String', () => {
  expect(cryptoJs.encryptJs('xchdhcvhd')).toBeTruthy();
});
