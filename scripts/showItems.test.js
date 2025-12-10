import { it, expect, vi } from "vitest";
import { showError, showNumber } from "./showItems";
import fs from "fs";
import path from "path";

const htmlDocPath = path.join(process.cwd(), "calculator.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

vi.stubGlobal("document", document);

const numberDisplay = document.querySelector(".current-number-js");

it("should round off the numbers if there is more than 1dp", () => {
  const result = String(1 / 3);
  const expectedResult = String(0.3);
  showNumber(result, numberDisplay);

  expect(numberDisplay.innerHTML).toBe(expectedResult);
});

it("should show an error if we are trying to divide by zero", () => {
  const firstNumber = 0;
  const secondNumber = 0;
  showError();
  const expectedResult = "Cannot divide by zero";

  expect(numberDisplay.innerHTML).toBe(expectedResult);
});
