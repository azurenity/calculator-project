import multiply from "./multiplication.js";
import { it, expect } from "vitest";

it('should multiply two numbers and return the correct amount', () => {
    const num1 = 1
    const num2 = 2

    const result = multiply(num1,num2)
    const expectedResult = num1 * num2

    expect(result).toBe(expectedResult);
});

