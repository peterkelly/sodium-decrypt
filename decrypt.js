// Original author: Peter Kelly <peter@pmkelly.net>
// The code in this file is in the public domain.

const fs = require("fs");
const sodium = require("libsodium-wrappers");

if (process.argv.length < 6) {
    console.log("Usage: decrypt.js PUBLIC_KEY_FILE PRIVATE_KEY_FILE " +
                "ENCRYPTED_FILE DECRYPTED_FILE");
    process.exit(1);
}

const publicKeyFilename = process.argv[2];
const privateKeyFilename = process.argv[3];
const ciphertextFilename = process.argv[4];
const plaintextFilename = process.argv[5];

try {
    const publicKeyHex = fs.readFileSync(publicKeyFilename, { encoding: "utf-8" }); // string
    const privateKeyHex = fs.readFileSync(privateKeyFilename, { encoding: "utf-8" }); // string
    const ciphertext = fs.readFileSync(ciphertextFilename); // Buffer

    const publicKey = Buffer.from(publicKeyHex, "hex");
    const privateKey = Buffer.from(privateKeyHex, "hex");
    const plaintext = sodium.crypto_box_seal_open(ciphertext, publicKey, privateKey);
    fs.writeFileSync(plaintextFilename, plaintext);
    console.log("Decrypted file written to " + plaintextFilename);
} catch (e) {
    console.error("" + e);
    process.exit(1);
}
