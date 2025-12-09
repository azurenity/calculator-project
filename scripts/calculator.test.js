import { it, expect, vi } from "vitest";
import fs from 'fs';
import path from 'path';

const htmlDocPath = path.join(process.cwd(), 'calculator.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

vi.stubGlobal('document', document)

it('should display the negative sign when the negative sign is clicked before a number', () => {
    const button = document.querySelector('.negative-button-js')

    button.click();
    
    const currentNumberElement = document.querySelector('.current-number-js')

    expect(currentNumberElement.innerHTML).toContain('-')
});