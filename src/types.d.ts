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
