import divide from "./division.js"
import multiply from "./multiplication.js"
import subtract from "./subtraction.js"
import add from "./addition.js"

let firstNumber = 0
let secondNumber = 0
let operator = ""
let currentNumber = ""
let ranOnce = false
const numberDisplay = document.querySelector(".current-number-js")


const clearButtonElement = document.querySelector('.clear-button-js')

clearButtonElement.addEventListener('click', () => {
    currentNumber = ""
    showNumber()
    console.log(`cleared, number is reset`)
}) 

const equalButtonElement = document.querySelector('.equal-button-js')

equalButtonElement.addEventListener('click', () => {
    if (operator === "") {
        showNumber()
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
        result = divide(firstNumber, secondNumber)
    }
    currentNumber = String(result)
    firstNumber = result
    showNumber()
}) 

function showNumber() {
    if (currentNumber === "") {
        numberDisplay.innerHTML = 0
    } else {
        numberDisplay.innerHTML = Math.round(currentNumber * 10) / 10 // if you want to not round/truncate to 1dp, remove this code and replace it with numberDisplay.innerHTML = currentNumber
    }
}

showNumber()

const numberButtonsElement = document.querySelectorAll('.number-button-js')

numberButtonsElement.forEach(button => {
    button.addEventListener('click', (e) => {
        let numberPressed = e.currentTarget.innerHTML

        if (currentNumber === "") {
            if (numberPressed === "0") {
                return
            }
        } else if (ranOnce === true) {
            currentNumber = numberPressed
            showNumber()
            ranOnce = false
            operator = ""
            return
        }
        currentNumber = currentNumber + numberPressed
        showNumber()
    })
})


const operatorButtonsElement = document.querySelectorAll('.operator-button-js')

operatorButtonsElement.forEach(button => {
    button.addEventListener('click', (e) => { 
        ranOnce = false
        operator = e.currentTarget.innerHTML
        firstNumber = Number(currentNumber)
        console.log(firstNumber)
        currentNumber = ""
    })
})

