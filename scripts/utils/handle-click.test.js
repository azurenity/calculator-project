import {jest} from '@jest/globals';

// idea for this code below:
// it will mock the entire show-items.js module and return the two mock functions that does nothing -> since we dont need to actually test the showItems functions

jest.unstable_mockModule('./show-items.js', () => ({ // note that the path that you mock has to be the EXACT SAME as the one stated in handle-click.js
    showNumber: jest.fn(), // does nothing
    showDivisionError: jest.fn(), // nothing
    showDecimalError: jest.fn() // all does nothing
}));

jest.unstable_mockModule('./log.js', () => ({ // note that the path that you mock has to be the EXACT SAME as the one stated in handle-click.js
    showLog: jest.fn(), // does nothing
    updateLog: jest.fn(), // does nothing
}));

const { handleClearBtnClick, handleAllClearBtnClick } = await import('./handle-click.js');

describe('handleClearBtnClick()', () => {
    it('should reset the currentNumber to an empty string', () => {
        expect(handleClearBtnClick("12")).toBe("")
    })
})

describe('handleAllClearBtnClick()', () => {
    it('should reset ALL the object properties to its initial state', () => {
        expect(handleAllClearBtnClick()).toEqual({
        currentNumber: "",
        firstNumber: 0,
        secondNumber: 0,
        operator: "",
        ranOnce: false,
        })
    })
})