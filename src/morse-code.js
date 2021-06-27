let normalCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let morseCodeCharacters = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

//main functions/////////////////////////////////
function lettersToMorseCode(normalStr) {
  let morseStr = [];
  let normalstrArray = normalStr.toLowerCase().split("");
  for (let i = 0; i < normalstrArray.length; i++) {
    for (let j = 0; j < normalCharacters.length; j++) {
      if (normalstrArray[i] == normalCharacters[j]) {
        morseStr.push(morseCodeCharacters[j], " ");
        break;
      } else if (normalstrArray[i] == " ") {
        morseStr.push("/", " ");
        break;
      }
    }
  }
  morseStr.pop();
  morseStr = morseStr.join("");

  //asserts number of characters and spaces
  assertions(normalStr, morseStr);

  return morseStr;
}

function morseCodeToLetters(morseStr) {
  let normalStr = [];
  let morseStrArray = morseStr.split(" ");
  for (let i = 0; i < morseStrArray.length; i++) {
    for (let j = 0; j < morseCodeCharacters.length; j++) {
      if (morseStrArray[i] == morseCodeCharacters[j]) {
        normalStr.push(normalCharacters[j]);
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

module.exports = { lettersToMorseCode, morseCodeToLetters };
