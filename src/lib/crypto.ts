import * as CryptoJS from 'crypto-js';
import { isEmpty } from '../index';
import { CryptoJSInstance } from '../types';

export class CryptoJs implements CryptoJSInstance {
  private readonly secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey as string;
  }

  public encryptJs(encryptValue: string): string | TypeError {
    try {
      if (
        !encryptValue ||
        (typeof encryptValue !== 'object' && typeof encryptValue !== 'string') ||
        (typeof encryptValue === 'string' && encryptValue.length === 0)
      ) {
        return TypeError('Encrypt value is on invalid type, requested object or string');
      }

      encryptValue = JSON.stringify(encryptValue);
      const key = CryptoJS.enc.Latin1.parse('1234567812345678');
      const iv: CryptoJS.lib.WordArray = CryptoJS.enc.Latin1.parse('1234567812345678');

      const encrypted = CryptoJS.AES.encrypt(encryptValue, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
      });
      return encrypted.toString();
    } catch (err) {
      return '';
    }
  }

  public decryptJs(decryptValue: string): string | TypeError {
    try {
      if (!decryptValue || decryptValue.length <= 0 || typeof decryptValue !== 'string') {
        return TypeError('Decrypt value is on invalid type, requested string');
      }

      const key = CryptoJS.enc.Latin1.parse('1234567812345678');
      const iv = CryptoJS.enc.Latin1.parse('1234567812345678');
      const bytes = CryptoJS.AES.decrypt(decryptValue, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } catch (err) {
      return '';
    }
  }

  public replaceSpecialCharacter(value: string, type: string): string {
    try {
      let textValue = value;
      if (!isEmpty(textValue)) {
        if (type === 'encrypt') {
          // textValue = textValue.toString().replace('+', 'xMl3Jk').replace('/', 'Por21Ld').replace('=', 'Ml32');
          textValue = textValue.toString().replace(/\+/g, 'xMl3Jk').replace(/\//g, 'Por21Ld').replace(/\=/g, 'Ml32');
        } else if (type === 'decrypt') {
          // textValue = textValue.replace('xMl3Jk', '+').replace('Por21Ld', '/').replace('Ml32', '=');
          textValue = textValue
            .replace(/\xMl3Jk/g, '+')
            .replace(/\Por21Ld/g, '/')
            .replace(/\Ml32/g, '=');
        }
      }
      return textValue;
    } catch (err) {
      return '';
    }
  }

  public encryptString(encryptValue: string, isSpecialCharacters: boolean = false): string | TypeError {
    try {
      if (!encryptValue || typeof encryptValue !== 'string' || encryptValue.length === 0) {
        return TypeError('Encrypt value is on invalid type, requested string');
      }
      encryptValue = encryptValue.toString();
      const ciphertext = CryptoJS.AES.encrypt(encryptValue, this.secretKey).toString();
      if (isSpecialCharacters) {
        return this.replaceSpecialCharacter(ciphertext, 'encrypt');
      }
      return ciphertext;
    } catch (err) {
      return '';
    }
  }

  public decryptString(decryptValue: string, isSpecialCharacters: boolean = false): string | TypeError {
    try {
      if (!decryptValue || typeof decryptValue !== 'string' || decryptValue.length === 0) {
        return TypeError('Encrypt value is on invalid type, requested string');
      }
      if (isSpecialCharacters) {
        decryptValue = this.replaceSpecialCharacter(decryptValue, 'decrypt');
      }

      const bytes = CryptoJS.AES.decrypt(decryptValue, this.secretKey);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      return originalText;
    } catch (err) {
      return '';
    }
  }
}
