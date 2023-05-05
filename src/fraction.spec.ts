import { test, expect } from "vitest";
import Fraction from "./fraction";
test("1/2 + 3/4 = 5/4", () => {
  const sut = new Fraction(1, 2);
  expect(sut.add(new Fraction(3, 4))).toStrictEqual(new Fraction(5, 4));
});

test.each([
  [new Fraction(3, 9), new Fraction(1, 3)],
  [new Fraction(10, 8), new Fraction(5, 4)],
  [new Fraction(5, 3), new Fraction(5, 3)],
  [new Fraction(1, 2), new Fraction(1, 2)],
  [new Fraction(5, 1), new Fraction(5, 1)],
])("simplify", (sut, expected) => {
  expect(sut.simplify()).toStrictEqual(expected);
});

console.log(new Fraction(3, 4).toString());
