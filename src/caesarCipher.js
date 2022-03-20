
export function caesarCipher(rawWord, shiftCount) {
  const shiftedWord = [];

  [...rawWord].forEach((letter) => {
    const charCode = letter.charCodeAt();
    if (charCode >= 65 && charCode <= 90) shiftedWord.push(shiftUpperCase(charCode, shiftCount));
    else if (charCode >= 97 && charCode <= 122) shiftedWord.push(shiftLowerCase(charCode, shiftCount));
    // not a letter
    else shiftedWord.push(letter);
  });

  return shiftedWord.join('');
}

function shiftUpperCase(charCode, shiftCount) {
  if (charCode + shiftCount > 90) return (String.fromCharCode(charCode + shiftCount - 90 + 64));
  // handles negative shiftCount
  else if (charCode + shiftCount < 65) return (String.fromCharCode(charCode + shiftCount + 90 - 64));
  return String.fromCharCode(charCode + shiftCount);
}

function shiftLowerCase(charCode, shiftCount) {
  if (charCode + shiftCount > 122) return (String.fromCharCode(charCode + shiftCount - 122 + 96));
  // handles negative shiftCount
  else if (charCode + shiftCount < 97) return (String.fromCharCode(charCode + shiftCount +122  - 96));
  return String.fromCharCode(charCode + shiftCount);
}