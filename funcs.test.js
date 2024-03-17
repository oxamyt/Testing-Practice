import { capitalize, reverse } from "./funcs";

test("return first character capitalized", () => {
  expect(capitalize("banana")).toBe("Banana");
});

test("return string reversed", () => {
  expect(reverse("apple")).toBe("elppa");
});
