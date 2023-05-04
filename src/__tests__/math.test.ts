import { percentageRemoval, calculateCommissionFee } from '../index';

test('Percentage Removal Calculation', () => {
  expect(percentageRemoval(100, 25)).toBe(75);
});

test('Precentage Removal Calculation', () => {
  expect(percentageRemoval('100.00', '25.00')).toBe(75);
});

test('Calculate Commission Fee', () => {
  expect(calculateCommissionFee(1000, 950)).toBe(50);
});
