const charDictionary = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  "!": "-.-.--",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  " ": " / ",
};

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
}
module.exports = { charDictionary, assertions };
