import { isEmpty } from '../index';
import { CalculateCommissionFee, InterestByDays, PercentageCalculation, ServiceFees } from '../types';

export const percentageRemoval: PercentageCalculation = (price, percentage) => {
  price = parseFloat(price as string);
  percentage = parseFloat(percentage as string);

  if (!isEmpty(price)) {
    return price - price * (percentage / 100);
  }

  return 0;
};

export const calculateCommissionFee: CalculateCommissionFee = (actualAmount, amount) => {
  actualAmount = parseFloat(actualAmount as string);
  amount = parseFloat(amount as string);

  if (!isEmpty(actualAmount) && !isEmpty(amount)) {
    return actualAmount - amount;
  }
  return 0;
};

export const pricePercentConversion: PercentageCalculation = (price, percentage) => {
  price = parseFloat(price as string);
  percentage = parseFloat(percentage as string);

  if (!isEmpty(price)) {
    return price * (percentage / 100);
  }
  return 0;
};

export const interestByDays: InterestByDays = (price, rate, days) => {
  price = parseFloat(price as string);
  rate = parseFloat(rate as string);
  days = parseFloat(days as string);

  if (!isEmpty(price) && !isEmpty(rate) && !isEmpty(days)) {
    return (price * (rate / 100)) / days;
  }
  return 0;
};

export const withoutServiceFee: ServiceFees = (price, serviceFee) => {
  price = parseFloat(price as string);
  serviceFee = parseFloat(serviceFee as string);
  return price - price * (serviceFee / 100);
};

export const calculateServiceFee: ServiceFees = (price, serviceFee) => {
  price = parseFloat(price as string);
  serviceFee = parseFloat(serviceFee as string);
  return price * (serviceFee / 100);
};
