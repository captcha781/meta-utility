import * as bcrypt from 'bcrypt';
import { ComparePassword, GeneratePassword } from '../types';

export const generatePassword: GeneratePassword = (password) => {
  if (password.length === 0 || !password) {
    return TypeError('Password field cannot be empty');
  }
  const salt: string = bcrypt.genSaltSync(10);
  const hash: string = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword: ComparePassword = (password, hashedPassword) => {
  if (!password || password.length === 0) {
    return TypeError('Password argument passed on password field');
  }
  if (!hashedPassword || hashedPassword.length === 0) {
    return TypeError('Hashed Password argument passed on hashedPassword field');
  }

  return bcrypt.compareSync(password, hashedPassword);
};
