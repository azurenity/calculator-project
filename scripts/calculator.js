import divide from "./division.js"
import multiply from "./multiplication.js"
import subtract from "./subtraction.js"
import add from "./addition.js"
import { updateLog, showLog } from "./log.js"
import { showNumber, showError } from "./showItems.js"

let firstNumber = 0
let secondNumber = 0
let operator = ""
let currentNumber = ""
let ranOnce = false

const clearButtonElement = document.querySelector('.clear-button-js')

clearButtonElement.addEventListener('click', () => {
    currentNumber = ""
    showNumber(currentNumber)
    console.log(`cleared, number is reset`)
}) 

const equalButtonElement = document.querySelector('.equal-button-js')

equalButtonElement.addEventListener('click', () => {
    if (operator === "") {
        showNumber(currentNumber)
        return
    } else if (ranOnce !== true) {
        secondNumber = Number(currentNumber)
        ranOnce = true
    }
    let result = 0
    if (operator === "+") {
        result = add(firstNumber, secondNumber)
    } else if (operator === "-") {
        result = subtract(firstNumber, secondNumber)
    } else if (operator === "x") {
        result = multiply(firstNumber, secondNumber)
    } else if (operator === "/") {
        if (secondNumber === 0) {
            showError()
            return
        }
        result = divide(firstNumber, secondNumber)
    }
    currentNumber = String(result)
    updateLog(firstNumber, operator, secondNumber, result)
    showLog()
    firstNumber = result
    showNumber(currentNumber)
    currentNumber = ""
}) 

showNumber(currentNumber)

const numberButtonsElement = document.querySelectorAll('.number-button-js')

numberButtonsElement.forEach(button => {
    button.addEventListener('click', (e) => {
        let numberPressed = e.currentTarget.innerHTML
        console.log(currentNumber)
        console.log(ranOnce)
        if (currentNumber === "") {
            if (numberPressed === "0") {
                return
            } 
        } else if (ranOnce === true) {
            currentNumber = numberPressed
            showNumber(currentNumber)
            ranOnce = false
            operator = ""
            return
        }
        currentNumber = currentNumber + numberPressed
        showNumber(currentNumber)
    })
})


const operatorButtonsElement = document.querySelectorAll('.operator-button-js')

operatorButtonsElement.forEach(button => {
    button.addEventListener('click', (e) => { 
        operator = e.currentTarget.innerHTML
        if (currentNumber === "") {
            if (operator === "-") {
                currentNumber = '-'
                operator = ""
                ranOnce = false
                showNumber(currentNumber)
                return
            }
        }
        ranOnce = false
        firstNumber = Number(currentNumber)
        console.log(currentNumber)
        currentNumber = ""
    })
})

