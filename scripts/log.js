export function updateLog(log,firstNumber, operator, secondNumber, result) {
  firstNumber = Math.round(firstNumber * 10) / 10;
  secondNumber = Math.round(secondNumber * 10) / 10;
  result = Math.round(result * 10) / 10;
  const calculationToBeAdded = `${String(firstNumber)} ${operator} ${String(
    secondNumber
  )} = ${result}`;
  if (log.length < 5) {
    log.unshift(calculationToBeAdded);
} else {
    log.pop()
    log.unshift(calculationToBeAdded);
  }

  return log;
}

export function showLog(log,logElement) {
  let htmlContent = "<ul>";

  log.forEach((calculation) => {
    htmlContent += `<li class="log-element">${calculation}</li>`;
  });

  htmlContent += "</ul>";
  logElement.innerHTML = htmlContent;

  return htmlContent
}
