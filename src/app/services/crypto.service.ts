import { Injectable } from "@angular/core";
import * as encoding from "text-encoding";
import { KeyPair } from "../models/key-pair";

@Injectable()
export class CryptoService {
  dec = new encoding.TextDecoder();
  constructor() { }
  encrypt(password: string, keys: KeyPair) {
    console.log(password, keys);
    
    console.log(new encoding.TextEncoder().encode(password));
    
    return window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
        //label: Uint8Array([...]) //optional
      },
      keys.publicKey, //from generateKey or importKey above
      new encoding.TextEncoder().encode(password) //ArrayBuffer of data you want to encrypt
    )
  }
  decrypt(data: ArrayBuffer, keys: KeyPair): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        let decodedData: string = this.dec.decode(await window.crypto.subtle.decrypt(
          {
            name: "RSA-OAEP",
            //label: Uint8Array([...]) //optional
          },
          keys.privateKey, //from generateKey or importKey above
          data //ArrayBuffer of the data
        ));
        resolve(decodedData)
      } catch (err) {
        resolve(err);
      }
    })
  }
  generateKeys() {
    return window.crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048, //can be 1024, 2048, or 4096
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
      },
      false,
      ["encrypt", "decrypt"]
    )
  }
}
