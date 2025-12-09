import { it, expect } from "vitest";
import divide from "./division.js";

it('should divide two numbers and return the correct amount', () => {
    const num1 = 1
    const num2 = 2
    const num3 = 3

    const result1 = divide(num1,num2)
    const expectedResult1 = num1 / num2
    const result2 = divide(num1,num3)
    const expectedResult2 = num1 / num3
    

    expect(result1).toBe(expectedResult1);
    expect(result2).toBe(expectedResult2);
});

// this does not handle 1dp cases, showNumber will help to round it off