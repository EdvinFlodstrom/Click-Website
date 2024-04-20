'use strict';

const form = document.querySelector('#numberOfButtonsForm');
const numberInput = document.querySelector('#numberInput');
const submitButton = form.querySelector('button[type="submit"]');

const maxNumberOfButtons = 20;
const listOfGeneratedbuttons = [];
const classNameGeneratedButtons = 'generatedButtons';

numberInput.addEventListener('input', () => {
    const numberInputValue = Number(numberInput.value);
    if (numberInputValue > 0 && numberInputValue <= maxNumberOfButtons) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

function getRandomPosition() {
    const buttonWidth = 100;
    const buttonHeight = 50;
    const padding = 10;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    
    const xPos = Math.floor(Math.random() * (viewportWidth - buttonWidth - padding * 2)) + padding;
    const yPos = Math.floor(Math.random() * (viewportHeight - buttonHeight - padding * 2)) + padding;

    return { xPos, yPos };
}

function isOverLapping(listOfButtons, xPosNewButton, yPosNewButton) {
    for (const button of listOfButtons) {
        if (
            xPosNewButton < button.xPos + button.width &&
            xPosNewButton + button.width > button.xPos &&
            yPosNewButton < button.yPos + button.height &&
            yPosNewButton + button.height > button.yPos
        ) {
            return true;
        }
    }
    return false;
}

function generateNewButton(listOfButtons) {
    let xPos, yPos;

    do {
        ({ xPos, yPos } = getRandomPosition())
    } while (isOverLapping(listOfButtons, xPos, yPos));

    const button = document.createElement('button');
    button.style.position = 'absolute';
    button.style.left = `${xPos}px`;
    button.style.top = `${yPos}px`;
    button.classList.add(classNameGeneratedButtons);

    button.width = button.offsetWidth;
    button.height = button.offsetHeight;
    button.xPos = xPos;
    button.yPos = yPos;

    button.addEventListener('click', () => {
        console.log("Hello, World!");
        button.disabled = true;
    });
    
    document.body.appendChild(button);
    
    listOfButtons.push(button);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const buttonsToRemove = document.querySelectorAll(`.${classNameGeneratedButtons}`);
    buttonsToRemove.forEach(element => {
        element.remove();
    })

    listOfGeneratedbuttons.length = 0;
    for (let i = 0; i < Number(numberInput.value); ++i) {
        generateNewButton(listOfGeneratedbuttons);
    }
});