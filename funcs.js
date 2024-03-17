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
