import {jest} from '@jest/globals';

// idea for this code below:
// it will mock the entire show-items.js module and return the two mock functions that does nothing -> since we dont need to actually test the showItems functions
jest.unstable_mockModule('./show-items.js', () => ({ // note that the path that you mock has to be the EXACT SAME as the one stated in format.js
    showNumber: jest.fn(), // does nothing
    showDivisionError: jest.fn(secondNumber => {
      if (secondNumber === 0) {
        return "error";
      }
      return;
    }) // mimics the behavior of the actual show division error but DOES NOT modify the DOM
}));

const { validateOperatorBtn, calculateResult, numberPressedLogic, validateNumber, validateEqualBtn } = await import('./format.js');

describe("validateOperatorBtn()", () => {
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
    it('should correctly add two numbers', () => {
        const dummyVariables = {
            firstNumber: 1,
            secondNumber: 1,
            operator: "+"
        };
        const result = calculateResult(dummyVariables);
        expect(result).toBe("2");
    });
    
    it('should correctly subtract two numbers', () => {
        const dummyVariables = {
            firstNumber: 2,
            secondNumber: 1,
            operator: "-"
        };
        const result = calculateResult(dummyVariables);
        expect(result).toBe("1");
    });
    
    it('should correctly multiply two numbers', () => {
        const dummyVariables = {
            firstNumber: 2,
            secondNumber: 1,
            operator: "x"
        };
        const result = calculateResult(dummyVariables);
        expect(result).toBe("2");
    });
    
    it('should correctly divide two numbers', () => {
        const dummyVariables = {
            firstNumber: 2,
            secondNumber: 2,
            operator: "/"
        };
        const result = calculateResult(dummyVariables);
        expect(result).toBe("1");
    });
    
    it('should return error when dividing by zero', () => {
        const dummyVariables = {
            firstNumber: 2,
            secondNumber: 0,
            operator: "/"
        };
        const result = calculateResult(dummyVariables);
        expect(result).toBe("error");
    });
    
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

describe("numberPressedLogic()", () => {
    it('should concatenate the currentNumber string when passed with a numberPressed', () => {
        let dummyVariables = {
            currentNumber: "",
            ranOnce: false
        }
        Object.assign(dummyVariables,numberPressedLogic("1", dummyVariables))
        expect(dummyVariables.currentNumber).toBe("1")
    })
    
    it('should replace the currentNumber with a numberPressed with ranOnce is true', () => {
        let dummyVariables = {
            currentNumber: "123458",
            ranOnce: true
        }
        Object.assign(dummyVariables,numberPressedLogic("1", dummyVariables))
        expect(dummyVariables.currentNumber).toBe("1")
    })
    
    it('should not add a zero if the currentNumber is empty', () => {
        let dummyVariables = {
            currentNumber: "",
            ranOnce: false
        }
        Object.assign(dummyVariables,numberPressedLogic("0", dummyVariables))
        expect(dummyVariables.currentNumber).toBe("")
    })
})

describe("validateNumber()", () => {
    it('should return 0 if currentNumber is an empty string', () => {
        let currentNumber = ""
        expect(validateNumber(currentNumber)).toBe('0')
    })

    it('should return 0. if currentNumber is . and not NaN', () => {
        let currentNumber = "."
        expect(validateNumber(currentNumber)).toBe('0.')
    })

    it('should return - if currentNumber is - and not NaN', () => {
        let currentNumber = "-"
        expect(validateNumber(currentNumber)).toBe('-')
    })

    it('should return a 1dp number if currentNumber is 2dp', () => {
        let currentNumber = "0.12"
        expect(validateNumber(currentNumber)).toBe('0.1')
    })
})

describe("validateEqualBtn()", () => {
    it('should return none if operator is none', () => {
        let dummyVariables = {
            currentNumber: "",
            secondNumber: 0,
            ranOnce: false,
            operator: ""
        }
        // when you return; it will be returning undefined
        expect(validateEqualBtn(dummyVariables)).toBeUndefined()
    })

    it('should register the secondNumber to the currentNumber if ranOnce is false', () => {
        let dummyVariables = {
            currentNumber: "10",
            secondNumber: 0,
            ranOnce: false,
            operator: "+"
        }
        // the function should return the new object with the changed secondNumber
        expect(validateEqualBtn(dummyVariables).secondNumber).toBe(10)
    })
})

describe("formatCalculation()", () => {
    it('should return the correct calculation when provided all the correct inputs', () => {
        let dummyVariables = {
            firstNumber: 1,
            secondNumber: 1,
            currentNumber: '2',
            ranOnce: false,
            operator: "+"
        }
        // when you return; it will be returning undefined
        expect(formatCalculation(dummyVariables)).toBe(`1 + 1 = 2`)
    })
    
    it('should round off the terms when provided with 2dp numbers', () => {
        let dummyVariables = {
            firstNumber: 0.25,
            secondNumber: 0.33,
            currentNumber: '0.58',
            ranOnce: false,
            operator: "+"
        }
        
        expect(formatCalculation(dummyVariables)).toBe(`0.3 + 0.3 = 0.6`)
    })
})
