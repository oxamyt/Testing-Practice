import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./funcs";

test("return first character capitalized", () => {
  expect(capitalize("banana")).toBe("Banana");
});

test("return string reversed", () => {
  expect(reverse("apple")).toBe("elppa");
});

test("calculator basic operations, add, subtract,divide,multiply", () => {
  expect(calculator.add(2, 10)).toBe(12);
  expect(calculator.subtract(2, 10)).toBe(-8);
  expect(calculator.divide(2, 10)).toBeCloseTo(0.2);
  expect(calculator.multiply(2, 10)).toBe(20);
});

test("caesar cipher", () => {
  expect(caesarCipher("I love my new puppy, she`s so adorable.", 3)).toBe(
    "L oryh pb qhz sxssb, vkh`v vr dgrudeoh."
  );
});

test("analyzing array", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  console.log(object);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.average).toBe(4);
  expect(object.length).toBe(6);
});
