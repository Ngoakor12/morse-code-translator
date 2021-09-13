// const { morseCodeToLetters } = require("./morse-code");

// const { morseCodeToLetters } = require("./morse-code");

const DOM = {
  morsecodeBox: document.querySelector("#morse-code"),
  englishAlphabetBox: document.querySelector("#english-alphabet"),
  translateButton: document.querySelector("#translate-button"),
};

DOM.translateButton.addEventListener("click", translate);

function translate() {
  if (!DOM.morsecodeBox.value) {
    DOM.morsecodeBox.value = lettersToMorseCode(DOM.englishAlphabetBox.value);
    DOM.englishAlphabetBox.value = "";
  } else if (!DOM.englishAlphabetBox.value) {
    DOM.englishAlphabetBox.value = morseCodeToLetters(DOM.morsecodeBox.value);
    DOM.morsecodeBox.value = "";
  }
}
