import { numberPressedLogic, validateOperatorBtn, validateEqualBtn, formatCalculation, calculateResult } from "../format.js";
import { showNumber, showDecimalError } from "./show-items.js";
import { updateLog, showLog } from "../log.js";

export function handleEqualBtnClick(variables) {
  const newVariables = Object.assign(variables,validateEqualBtn(variables));
  if (!newVariables) {
    return;
  }
  newVariables.currentNumber = calculateResult(newVariables);
  if (newVariables.currentNumber === "error") {
    return;
  }
  const calculationToBeAdded = formatCalculation(newVariables);
  updateLog(calculationToBeAdded);
  showLog();
  showNumber(newVariables.currentNumber);
  newVariables.firstNumber = Number(newVariables.currentNumber);
  newVariables.currentNumber = "";
  return newVariables;
}

export function handleClearBtnClick(currentNumber) {
  currentNumber = "";
  showNumber(currentNumber);
  return currentNumber;
}

export function handleAllClearBtnClick() {
  const resetVariables = {
    currentNumber: "",
    firstNumber: 0,
    secondNumber: 0,
    operator: "",
    ranOnce: false,
  };

  showNumber(resetVariables.currentNumber);
  console.log(`cleared, all numbers and operators are reset`);
  return resetVariables;
}

// handle number btn click needs fixing
export function handleNumberBtnClick(event, variables) {
  const newVariables = { ...variables };
  const numberPressed = event.currentTarget.innerHTML;
  if (showDecimalError(newVariables.currentNumber, numberPressed)) {
    return;
  }
  Object.assign(newVariables, numberPressedLogic(numberPressed, newVariables));
  showNumber(newVariables.currentNumber);
  return newVariables;
}

export function handleOperatorBtnClick(event, variables) {
  const newVariables = { ...variables };

  newVariables.operator = event.currentTarget.innerHTML;
  newVariables.ranOnce = false;
  Object.assign(newVariables, validateOperatorBtn(newVariables));
  return newVariables;
}
