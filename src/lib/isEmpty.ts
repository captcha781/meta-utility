import { IsEmpty } from '../types';

export const isEmpty: IsEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (typeof value === 'number' && String(value).length === 0)
  );
};
