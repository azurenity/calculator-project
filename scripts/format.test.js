import {jest} from '@jest/globals';
import expect from 'expect';

// idea for this code below:
// it will mock the entire show-items.js module and return the two mock functions that does nothing -> since we dont need to actually test the showItems functions
jest.unstable_mockModule('./utils/show-items.js', () => ({ // note that the path that you mock has to be the EXACT SAME as the one stated in format.js
    showNumber: jest.fn(), // does nothing
    showDivisionError: jest.fn(secondNumber => {
      if (secondNumber === 0) {
        return "error";
      }
      return;
    }) // mimics the behavior of the actual show division error but DOES NOT modify the DOM
}));

const { validateOperatorBtn, calculateResult } = await import('./format.js');

describe("Validate functions", () => {
    it('should allow the user to input a negative sign as the first value', () => {
        let dummyVariables = {
            currentNumber: '',
            firstNumber: 0,
            operator: '-'
        }
        dummyVariables = validateOperatorBtn(dummyVariables)
        expect(dummyVariables.currentNumber).toEqual('-')
    })
})

describe("calculateResult()", () => {
    it('should calculate the correct result when given correct inputs', () => {
        let dummyVariables = {
            firstNumber: 1,
            secondNumber: 1,
            operator: "+"
        }
        additionResult = calculateResult(dummyVariables)
        expect(additionResult).toBe("2")
        
        dummyVariables = {
            firstNumber: 2,
            secondNumber: 1,
            operator: "-"
        }
        
        subtractResult = calculateResult(dummyVariables)
        expect(subtractResult).toBe("1")
    
        dummyVariables = {
            firstNumber: 2,
            secondNumber: 1,
            operator: "x"
        }
        
        multiplyResult = calculateResult(dummyVariables)
        expect(multiplyResult).toBe("2")
    
        dummyVariables = {
            firstNumber: 2,
            secondNumber: 2,
            operator: "/"
        }
        
        divideResult = calculateResult(dummyVariables)
        expect(divideResult).toBe("1")
    }) 
    
    it('should return error as a string when given a division operator with the second number being 0', () => {
        dummyVariables = {
            firstNumber: 2,
            secondNumber: 0,
            operator: "/"
        }
        
        divideResult = calculateResult(dummyVariables)
        expect(divideResult).toBe("error")
    })
})

