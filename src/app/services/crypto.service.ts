import { Injectable } from "@angular/core";
import * as Crypto from "crypto-js";
import * as uuid from "node-uuid";
@Injectable()
export class CryptoService {
  constructor() {}
  encrypt(password: string, secret: string): string {
    return Crypto.AES.encrypt(password, secret).toString();
  }
  decrypt(encryptedPassword: string, secret: string): string {
    return Crypto.AES.decrypt(encryptedPassword, secret).toString(Crypto.enc.Utf8);
  }
  generateSecretKey(): string {
    return uuid.v4();
  }
}
