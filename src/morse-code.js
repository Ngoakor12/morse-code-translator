const { charDictionary } = require("./morse-code-helpers");
const alphabetChars = Object.keys(charDictionary);
const morseChars = Object.values(charDictionary);

function lettersToMorseCode(alphabetStr) {
  let morseStr = [];
  let alphabetStrArray = alphabetStr.toLowerCase().split("");
  for (let i = 0; i < alphabetStrArray.length; i++) {
    for (let j = 0; j < alphabetChars.length; j++) {
      if (alphabetStrArray[i] == alphabetChars[j]) {
        morseStr.push(morseChars[j], " ");
        break;
      } else if (alphabetStrArray[i] == " ") {
        morseStr.push("/", " ");
        break;
      }
    }
  }
  morseStr.pop();
  morseStr = morseStr.join("");

  //asserts number of characters and spaces
  assertions(alphabetStr, morseStr);

  return morseStr;
}

function morseCodeToLetters(morseStr) {
  let normalStr = [];
  let morseStrArray = morseStr.split(" ");
  for (let i = 0; i < morseStrArray.length; i++) {
    for (let j = 0; j < morseChars.length; j++) {
      if (morseStrArray[i] == morseChars[j]) {
        normalStr.push(alphabetChars[j]);
        break;
      } else if (morseStrArray[i] == "/") {
        normalStr.push(" ");
        break;
      }
    }
  }
  normalStr[0] = normalStr[0].toUpperCase();
  normalStr = normalStr.join("");

  assertions(normalStr, morseStr);

  return normalStr;
}

function assertions(normalStr, morseStr) {
  let numberOfCharsError =
    "The number of characters in the input is not the same as that of output";
  let numberOfSpacesError =
    "The number of spaces in the input is not the same as that of output";

  let normalStrLength = normalStr.length;
  let morseStrLength = morseStr.split(" ").length;
  let normalStrSpaces = normalStr.split(" ").length - 1;
  let morseStrSpaces = morseStr.split("/").length - 1;

  console.assert(normalStrLength == morseStrLength, numberOfCharsError);
  console.assert(normalStrSpaces == morseStrSpaces, numberOfSpacesError);

  return;
}
console.log(lettersToMorseCode);

module.exports = { lettersToMorseCode, morseCodeToLetters };
