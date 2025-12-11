import { add, subtract, divide, multiply } from "./math.js";

it("should add two numbers and return the correct sum", () => {
  const num1 = 1;
  const num2 = 2;

  const result = add(num1, num2);
  const expectedResult = num1 + num2;

  expect(result).toBe(expectedResult);
});

it("should add two numbers and return the correct sum", () => {
  const num1 = 1;
  const num2 = 2;

  const result = subtract(num1, num2);
  const expectedResult = num1 - num2;

  expect(result).toBe(expectedResult);
});

it("should multiply two numbers and return the correct amount", () => {
  const num1 = 1;
  const num2 = 2;

  const result = multiply(num1, num2);
  const expectedResult = num1 * num2;

  expect(result).toBe(expectedResult);
});

it("should divide two numbers and return the correct amount", () => {
  const num1 = 1;
  const num2 = 2;

  const result1 = divide(num1, num2);
  const expectedResult1 = num1 / num2;

  expect(result1).toBe(expectedResult1);
});

// this does not handle 1dp cases, showNumber will help to round it off