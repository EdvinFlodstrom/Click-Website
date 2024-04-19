'use strict';

const form = document.querySelector('#numberOfButtonsForm');
const numberInput = document.querySelector('#numberInput');
const submitButton = form.querySelector('button[type="submit"]');

const maxNumberOfButtons = 20;

numberInput.addEventListener('input', () => {
    const numberInputValue = Number(numberInput.value);
    if (numberInputValue > 0 && numberInputValue <= maxNumberOfButtons) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

class GeneratedButton {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

function generateNewButton(buttonInstance) {
    const button = document.createElement('button');
    button.style.position = 'absolute';
    button.style.left = buttonInstance.xPos;
    button.style.top = buttonInstance.yPos;
    button.addEventListener('click', () => {
        console.log("Hello, World!");
        button.disabled = true;
    });
    document.body.appendChild(button);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    generateNewButton(new GeneratedButton(30, 30));
})