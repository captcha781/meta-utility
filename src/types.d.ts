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
