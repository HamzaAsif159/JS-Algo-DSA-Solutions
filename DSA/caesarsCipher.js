function rot13(str) {
    let cipher = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
    return str.replace(/[A-Z]/gi,letters=> cipher[cipher.indexOf(letters) + 13 ]);
  }
  rot13("SERR PBQR PNZC");