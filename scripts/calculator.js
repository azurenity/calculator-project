import { add, divide, multiply, subtract } from "./utils/math.js";
import { updateLog, showLog } from "./log.js";
import { showNumber, showError, numberDisplay } from "./showItems.js";

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let currentNumber = "";
let ranOnce = false;
const log = [];
const logElement = document.querySelector(".log-js");

const clearButtonElement = document.querySelector(".clear-button-js");

clearButtonElement.addEventListener("click", () => {
  currentNumber = "";
  showNumber(currentNumber, numberDisplay);
  console.log(`cleared, number is reset`);
});

const equalButtonElement = document.querySelector(".equal-button-js");

equalButtonElement.addEventListener("click", () => {
  if (operator === "") {
    showNumber(currentNumber, numberDisplay);
    return;
  } else if (ranOnce !== true) {
    secondNumber = Number(currentNumber);
    ranOnce = true;
  }
  let result = 0;
  if (operator === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator === "-") {
    result = subtract(firstNumber, secondNumber);
  } else if (operator === "x") {
    result = multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    if (secondNumber === 0) {
      showError();
      return;
    }
    result = divide(firstNumber, secondNumber);
  }

  currentNumber = String(result);
  updateLog(log, firstNumber, operator, secondNumber, result);
  showLog(log, logElement);
  firstNumber = result;
  showNumber(currentNumber, numberDisplay);
  currentNumber = "";
});

showNumber(currentNumber, numberDisplay);

const numberButtonsElement = document.querySelectorAll(".number-button-js");

numberButtonsElement.forEach((button) => {
  button.addEventListener("click", (e) => {
    let numberPressed = e.currentTarget.innerHTML;
    if (currentNumber === "") {
      if (numberPressed === "0") {
        return;
      }
    } else if (ranOnce === true) {
      currentNumber = numberPressed;
      showNumber(currentNumber, numberDisplay);
      ranOnce = false;
      operator = "";
      return;
    }
    currentNumber = currentNumber + numberPressed;
    showNumber(currentNumber, numberDisplay);
  });
});

const operatorButtonsElement = document.querySelectorAll(".operator-button-js");

operatorButtonsElement.forEach((button) => {
  button.addEventListener("click", (e) => {
    ranOnce = false;
    operator = e.currentTarget.innerHTML;
    if (currentNumber === "" && firstNumber === 0) {
      if (operator === "-") {
        currentNumber = "-";
        operator = "";
        showNumber(currentNumber, numberDisplay);
        return;
      } // this function makes it such that you can still assign the operator and come out with a result
    } else if (firstNumber === 0) { 
      if (currentNumber === "-") {
        currentNumber = "";
        console.log(currentNumber);
      } else {
        firstNumber = Number(currentNumber);
        currentNumber = "";
      }
    }
  });
});

const allClearButtonElement = document.querySelector(".all-clear-button-js");

allClearButtonElement.addEventListener("click", () => {
  currentNumber = "";
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  ranOnce = false;

  showNumber(currentNumber, numberDisplay);
  console.log(`cleared, all numbers and operators are reset`);
});
