// import { Injectable } from '@angular/core';
// import * as CryptoJS from 'crypto-js';

// @Injectable({
//   providedIn: 'root'
// })
// export class EncryptService {

//   key: string = process.env.SW_ENCR_KEY;
//   params: CryptoJS.CipherOption = {
//     iv: 'temp-iv',
//     s: 'temp-salt',
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   }

//   constructor() { }
 
//   //The set method is use for encrypt the value.
//   Encrypt(){

//     var data = {
//       user: "swike",
//       password: "pass",
//       role: "admin"
//     }

//     var message = JSON.stringify(data);
//     var encrypted = CryptoJS.AES.encrypt(message, this.key, this.params);

//     return encrypted.toString();
//   }

//   //The get method is use for decrypt the value.
//   Decrypt(encrypted: string) {
//     var decrypted = CryptoJS.AES.decrypt(encrypted, this.key, this.params);
//     return decrypted.toString(CryptoJS.enc.Utf8);
//   }
// }
