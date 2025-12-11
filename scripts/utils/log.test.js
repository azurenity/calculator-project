import { updateLog } from "./log";

it('should allow numbers to be added to the log', () => {
    const expectedResult = [`1 + 1 = 2`]

    const log = updateLog(`1 + 1 = 2`)
    
    expect(log).toEqual(expectedResult)
}) 

it('limit the number of elements in the log to only 5', () => {
    // reason why we do this is because the system will use the log in log.js if we dont pass in log as an argument into the function
    let log = updateLog(`1 + 1 = 2`)
    log = updateLog(`1 + 1 = 2`)
    log = updateLog(`1 + 1 = 2`)
    log = updateLog(`1 + 1 = 2`)
    log = updateLog(`2 + 1 = 3`)
    
    const expectedResult = [`2 + 1 = 3`,`1 + 1 = 2`,`1 + 1 = 2`,`1 + 1 = 2`,`1 + 1 = 2`]

    expect(log).toEqual(expectedResult)
}) 