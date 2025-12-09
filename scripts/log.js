const log = []
const logElement = document.querySelector('.log-js')

export function updateLog(firstNumber, operator, secondNumber, result) {
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