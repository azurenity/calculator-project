import { updateLog, showLog } from "./log";
import { it, expect, vi } from "vitest";
import fs from "fs";
import path from "path";

const htmlDocPath = path.join(process.cwd(), "calculator.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

vi.stubGlobal("document", document);


it('should allow numbers to be added to the log', () => {
    let log = [];
    const firstNumber = 1
    const secondNumber = 1
    const operator = "+"
    const result = 2
    const expectedResult = [`1 + 1 = 2`]

    updateLog(log,firstNumber,operator,secondNumber,result)

    expect(log).toEqual(expectedResult)
}) 

it('limit the number of elements in the log to only 5', () => {
    let log = [`1 + 1 = 2`,`1 + 1 = 2`,`1 + 1 = 2`,`1 + 1 = 2`,`1 + 1 = 2`];
    const firstNumber = 2
    const secondNumber = 1
    const operator = "+"
    const result = 3
    const expectedResult = [`2 + 1 = 3`,`1 + 1 = 2`,`1 + 1 = 2`,`1 + 1 = 2`,`1 + 1 = 2`]
    updateLog(log,firstNumber,operator,secondNumber,result)

    expect(log).toEqual(expectedResult)
}) 

it('should show the correct htmlContent to be displayed onto the website', () => {
    const log = [`1 + 1 = 2`];

    const expectedhtmlContent = `<ul><li class="log-element">1 + 1 = 2</li></ul>`
    const logElement = document.querySelector(".log-js");
    showLog(log,logElement)

    expect(logElement.innerHTML).toEqual(expectedhtmlContent)
})