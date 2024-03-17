import { capitalize, reverse, calculator } from "./funcs";

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
