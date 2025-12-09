const numberDisplay = document.querySelector(".current-number-js")

export function showNumber(currentNumber) {
    if (currentNumber === "") {
        numberDisplay.innerHTML = 0
    } else if (currentNumber.endsWith(".")) {
        numberDisplay.innerHTML = currentNumber
    } else if (currentNumber.startsWith('-')) {
        numberDisplay.innerHTML = currentNumber
    } else {
        numberDisplay.innerHTML = Math.round(currentNumber * 10) / 10 // if you want to not round/truncate to 1dp, remove this code and replace it with numberDisplay.innerHTML = currentNumber
    }
}

export function showError() {
    if (secondNumber === 0) {
        numberDisplay.innerHTML = "Cannot divide by zero"
        return
    }
}


export function showLog() {
    let htmlContent = '<ul>';

    log.forEach(calculation => {
        htmlContent += `<li class="log-element">${calculation}</li>`
    });

    htmlContent += '</ul>';

    logElement.innerHTML = htmlContent
}