const log = [];

export function updateLog(calculationToBeAdded) {
  if (log.length < 5) {
    log.unshift(calculationToBeAdded);
  } else {
    log.pop()
    log.unshift(calculationToBeAdded);
  }
  
  return log;
}

export function showLog() {
  const logElement = document.querySelector(".log-js");
  let htmlContent = "<ul>";

  log.forEach((calculation) => {
    htmlContent += `<li class="log-element">${calculation}</li>`;
  });

  htmlContent += "</ul>";
  logElement.innerHTML = htmlContent;

  return htmlContent
}

