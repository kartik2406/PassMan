import { Injectable } from "@angular/core";
import * as encoding from "text-encoding";

@Injectable()
export class CryptoService {
  dec = new encoding.TextDecoder();
  key: CryptoKey;

  constructor() {}
  encrypt(password: string, key: CryptoKey) {

    return window.crypto.subtle.encrypt(
      {
        name: "AES-CBC",
        iv: new Uint8Array(16)
      },
      key,
      new encoding.TextEncoder().encode(password)
    );
  }
  decrypt(data: ArrayBuffer, key: CryptoKey): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        let decodedData: string = this.dec.decode(
          await window.crypto.subtle.decrypt(
            {
              name: "AES-CBC",
              iv: new Uint8Array(16)
            },
            key, 
            data
          )
        );
        resolve(decodedData);
      } catch (err) {
        console.log(err);
        resolve(err);
      }
    });
  }

  async generateHash(value: string) {
    let arrayHash = await window.crypto.subtle.digest(
      "SHA-256",
      new encoding.TextEncoder().encode(value)
    );

    return new encoding.TextDecoder().decode(arrayHash);
  }

  async generateKey(password: string) {
    let passKey = new encoding.TextEncoder().encode(password); //ArrayBuffer of data you want to encrypt
    let key = await window.crypto.subtle.importKey(
      "raw",
      passKey,
      "PBKDF2",
      false,
      ["deriveBits", "deriveKey"]
    );
    let cKey = await window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: new encoding.TextEncoder().encode("abcdc"),
        iterations: 100,
        hash: "SHA-256"
      },
      key,
      { name: "AES-CBC", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
    this.key = cKey;
    return cKey;
  }
  
  getSecretKey(): CryptoKey {
    return this.key;
  }
}
