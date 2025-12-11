import { showNumber, showDivisionError } from "./utils/show-items.js";
import { add, subtract, multiply, divide } from "./utils/math.js";

export function validateNumber(currentNumber) {
  let displayNumber = "0";
  if (currentNumber.endsWith(".")) {
    displayNumber = currentNumber;
  } else if (currentNumber.startsWith("-")) {
    displayNumber = currentNumber;
  } else {
    displayNumber = Math.round(currentNumber * 10) / 10; // if you want to not round/truncate to 1dp, remove this code and replace it with numberDisplay.innerHTML = currentNumber
  }
  return displayNumber;
}

export function validateEqualBtn(variables) {
  let { currentNumber, secondNumber, ranOnce, operator } = variables;
  if (operator === "") {
    showNumber(currentNumber);
    return;
  } else if (ranOnce !== true) {
    secondNumber = Number(currentNumber);
    ranOnce = true;
  }
  return { currentNumber, secondNumber, ranOnce };
}

export function validateOperatorBtn(variables) {
  let { currentNumber, firstNumber, operator } = variables;
  if (currentNumber === "" && firstNumber === 0) {
    if (operator === "-") {
      currentNumber = "-";
      operator = "";
      showNumber(currentNumber);
    } // this function makes it such that you can still assign the operator and come out with a result
  } else if (firstNumber === 0) {
    if (currentNumber === "-") {
      currentNumber = "";
    } else {
      firstNumber = Number(currentNumber);
      currentNumber = "";
    }
  }
  return { currentNumber, firstNumber, operator };
}

export function formatCalculation(variables) {
  let { firstNumber, secondNumber, operator, currentNumber } = variables;
  firstNumber = Math.round(firstNumber * 10) / 10;
  secondNumber = Math.round(secondNumber * 10) / 10;
  const result = Math.round(Number(currentNumber) * 10) / 10;
  const calculationToBeAdded = `${String(firstNumber)} ${operator} ${String(
    secondNumber
  )} = ${String(result)}`;
  return calculationToBeAdded;
}

export function numberPressedLogic(numberPressed, variables) {
  let { currentNumber, ranOnce } = variables;
  if (currentNumber === "") {
    if (numberPressed === "0") {
      return "";
    }
  } else if (ranOnce === true) {
    currentNumber = numberPressed;
    showNumber(currentNumber);
    return {
      currentNumber,
      ranOnce: false,
      operator: "",
    };
  }
  return { currentNumber: currentNumber + numberPressed };
}

export function calculateResult(variables) {
  let { firstNumber, secondNumber, operator } = variables;
  let result = 0;
  if (operator === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator === "-") {
    result = subtract(firstNumber, secondNumber);
  } else if (operator === "x") {
    result = multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    if (showDivisionError(secondNumber)) {
      return "error";
    }
    result = divide(firstNumber, secondNumber);
  }
  return String(result);
}
