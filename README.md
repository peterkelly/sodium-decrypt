# sodium-decrypt

This program can be used to decrypt files that were encrypted using the "sealed boxes" feature of [libsodium](https://download.libsodium.org/doc/).

# Requirements

- Windows, Linux, or OS X
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org) version 8.9 or later

# Installation

    git clone https://github.com/peterkelly/sodium-decrypt.git
    cd sodium-decrypt
    npm install

# Usage

The program accepts four command line arguments:

1. The name of the public key file. This must be plain text, hex-encoded.
2. The name of the private key file. This must be plain text, hex-encoded.
3. The name of the encrypted file.
4. The name of the file to write the decrypted data to

# Example

Suppose you have placed the files `public.key`, `private.key`, and `sample.png.enc` in the `sodium-decrypt` directory:

    $ cat public.key
    01234abc56789def01234abc56789def01234abc56789def01234abc56789def
    $ cat private.key
    0badface123498760badface123498760badface123498760badface12349876

This checks the files are 32-byte keys encoded as hex (on Windows, use `type` instead of `cat`). Now, perform the actual decryption:

    $ node decrypt.js public.key private.key sample.png.enc sample.png
    Decrypted file written to /Users/peter/sodium-decrypt/sample.png

Assuming the public and private key are correct, the program will write `sample.png` with the decrypted output.
