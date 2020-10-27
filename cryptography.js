const CryptoJS = require("crypto-js");
require("dotenv").config({
    path: resolve(__dirname, "../../.env"),
  });

async function encrypting(){
    const encrypt = await CryptoJS.AES.encrypt(
        "<frase para encryptar>",
        process.env.PASSPHRASE
      );

      console.log(encrypt);
      console.log(String(encrypt));
      console.log(encrypt.toString(CryptoJS.enc.Utf8));
}

async function decrypting(){

    const decrypt = CryptoJS.AES.decrypt(
      "<Resposta do que veio na função encrypting() >",
      process.env.PASSPHRASE
    ).toString(CryptoJS.enc.Utf8);
  
    return String(decrypt);
}
  
  