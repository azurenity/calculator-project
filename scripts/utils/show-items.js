import { validateNumber } from "../format.js";
export const numberDisplay = document.querySelector(".current-number-js");

export function showNumber(currentNumber) {
  const displayNumber = validateNumber(currentNumber);
  numberDisplay.innerHTML = displayNumber;
}

import { allClearButtonElement } from "../calculator.js";
export function showDivisionError(secondNumber) {
  if (secondNumber === 0) {
    numberDisplay.innerHTML = "Cannot divide by zero";
    setTimeout(() => allClearButtonElement.click(), 2000);
    return "error";
  }
  return;
}

export function showDecimalError(currentNumber, numberPressed) {
  if (currentNumber.includes(".") && numberPressed === ".") {
    numberDisplay.innerHTML = "Cannot have two decimal points";
    setTimeout(() => allClearButtonElement.click(), 2000);
    return "error";
  }
  return;
}

// we avoid testing in this file as all the functions used is mostly from the DOM or JS default functions
