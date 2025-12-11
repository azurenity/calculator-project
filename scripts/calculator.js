import { showNumber } from "./show-items.js";
import { handleClearBtnClick, handleNumberBtnClick, handleAllClearBtnClick, handleOperatorBtnClick  } from "./utils/handle-click.js";
import { calculateResult, formatCalculation, validateEqualBtn } from "./format.js";
import { updateLog, showLog } from "./log.js";

// all the variables initialised in the calculator.js file is local to that file, need to pass these variables as arguments into the functions 
// all the variables that are changed in the functions will therefore need to be returned from the functions

const variables = {
  firstNumber: 0,
  secondNumber: 0,
  operator: "",
  currentNumber: "",
  ranOnce: false,
}

const clearButtonElement = document.querySelector(".clear-button-js");

clearButtonElement.addEventListener("click", () => {
  variables.currentNumber = handleClearBtnClick(variables)
});

const equalButtonElement = document.querySelector(".equal-button-js");

equalButtonElement.addEventListener("click", () => {
 
});

const numberButtonsElement = document.querySelectorAll(".number-button-js");

numberButtonsElement.forEach((button) => {
  button.addEventListener("click", (event) =>  {
    Object.assign(variables,handleNumberBtnClick(event,variables))
    });
});

const operatorButtonsElement = document.querySelectorAll(".operator-button-js");

operatorButtonsElement.forEach((button) => {
  button.addEventListener("click", (event) => {
    Object.assign(variables,handleOperatorBtnClick(event, variables))
  });
});

export const allClearButtonElement = document.querySelector(".all-clear-button-js");

allClearButtonElement.addEventListener("click", () => {
  Object.assign(variables, handleAllClearBtnClick())
});
