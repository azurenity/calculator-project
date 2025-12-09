const log = []
const logElement = document.querySelector('.log-js')

export function updateLog(firstNumber, operator, secondNumber, result) {
    firstNumber = Math.round(firstNumber * 10) / 10
    secondNumber = Math.round(secondNumber * 10) / 10
    result = Math.round(result * 10) / 10
    const calculationToBeAdded = `${String(firstNumber)} ${operator} ${String(secondNumber)} = ${result}`

    log.push(calculationToBeAdded)

    return log
}


export function showLog() {
    let htmlContent = '<ul>';

    log.forEach(calculation => {
        htmlContent += `<li class="log-element">${calculation}</li>`
    });

    htmlContent += '</ul>';

    logElement.innerHTML = htmlContent
}