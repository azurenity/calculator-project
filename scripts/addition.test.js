import add from "./addition.js"
import { it, expect } from "vitest";

it('should add two numbers and return the correct sum', () => {
    const num1 = 1
    const num2 = 2

    const result = add(num1,num2)
    const expectedResult = num1 + num2

    expect(result).toBe(expectedResult);
});

