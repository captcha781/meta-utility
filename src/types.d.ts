export interface TestFunction {
  (text: string): string;
}

export interface IsEmpty {
  (value: number | string | object | Array<any>): boolean;
}

export interface GeneratePassword {
  (password: string): string | Error;
}

export interface ComparePassword {
  (password: string, hashedPassword: string): boolean | Error;
}

export interface CryptoJSInstance {
  encryptJs: (encryptValue: string) => string | TypeError;
  decryptJs: (decryptValue: string) => string | TypeError;
  replaceSpecialCharacter: (value: string, type: string) => string;
  encryptString: (encryptValue: string, isSpecialCharacters: boolean) => string | TypeError;
  decryptString: (decryptValue: string, isSpecialCharacters: boolean) => string | TypeError;
}

export interface PercentageCalculation {
  (price: number | string, percentage: number | string): number;
}

export interface CalculateCommissionFee {
  (actualAmount: number | string, amount: number | string): number;
}

export interface InterestByDays {
  (price: number | string, rate: number | string, days: number | string): number;
}

export interface ServiceFees {
  (price: number | string, serviceFee: number | string): number;
}
