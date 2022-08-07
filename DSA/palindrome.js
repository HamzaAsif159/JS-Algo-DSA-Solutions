function palindrome(str) {

    const text =  str.toLowerCase().replace(/[\W_]/g, '');
    const textArray = text.split("");
    const reverseArray = textArray.reverse().join("");

    if (text == reverseArray) {
      return true;
    }
    else {
      return false;
    }
  }
  
  palindrome("eye");