const { lettersToMorseCode, morseCodeToLetters } = require("../src/morse-code");

describe("lettersToMorse", () => {
  it("translates letters to morse code", () => {
    expect(lettersToMorseCode("Hi there")).toBe(".... .. / - .... . .-. .");
  });
});

describe("morseCodeToLetters", () => {
  it("translates morse code to letters", () => {
    expect(morseCodeToLetters(".... .. / - .... . .-. .")).toBe("Hi there");
  });
});
