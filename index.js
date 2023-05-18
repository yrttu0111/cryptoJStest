import express from "express";
import CryptoJS from "crypto-js";
const app = new express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
    })
app.post("/decrypt", (req, res) => {
    const name = req.headers.name || 'no name';
    console.log(name)
    const secretKey =  'secret key';
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(name), secretKey).toString();
    console.log(encrypted);
    const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
    const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(decrypted);
    return decrypted;

    })
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
}
);


