export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverse(string) {
  return string.split("").reverse().join("");
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export function caesarCipher(string, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipherString = [];

  for (let i = 0; i < string.length; i++) {
    let character = string.charAt(i);
    if (!character.match(/[a-z]/i)) {
      cipherString.push(character);
    } else {
      let cipherChar =
        alphabet[
          (alphabet.indexOf(character.toLowerCase()) + key) % alphabet.length
        ];
      if (character === character.toUpperCase()) {
        cipherString.push(cipherChar.toUpperCase());
      } else {
        cipherString.push(cipherChar);
      }
    }
  }
  return cipherString.join("").toString();
}
