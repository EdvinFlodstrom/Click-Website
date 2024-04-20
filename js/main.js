'use strict';

const form = document.querySelector('#numberOfButtonsForm');
const numberInput = document.querySelector('#numberInput');
const submitButton = form.querySelector('button[type="submit"]');

const maxNumberOfButtons = 20;
const listOfGeneratedbuttons = [];
const classNameGeneratedButtons = 'generatedButtons';
const buttonWidth = 100;
const buttonHeight = 50;
const buttonPadding = 75;

numberInput.addEventListener('input', () => {
    const numberInputValue = Number(numberInput.value);
    if (numberInputValue > 0 && numberInputValue <= maxNumberOfButtons) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

function getInstructionsBoundingBox() {
    const instructionsDiv = document.querySelector('.centered-instructions');
    const rect = instructionsDiv.getBoundingClientRect();
    return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
    };
}

function getRandomPosition() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const xPos = Math.floor(Math.random() * (viewportWidth - buttonWidth - buttonPadding * 2)) + buttonPadding;
    const yPos = Math.floor(Math.random() * (viewportHeight - buttonHeight - buttonPadding * 2)) + buttonPadding;

    return { xPos, yPos };
}

function isOverlappingInstructions(xPosNewButton, yPosNewButton) {
    const instructionsBox = getInstructionsBoundingBox();
    if (
        xPosNewButton < instructionsBox.right && 
        xPosNewButton + buttonWidth > instructionsBox.left &&
        yPosNewButton < instructionsBox.bottom && 
        yPosNewButton + buttonHeight > instructionsBox.top
    ) {
        return true;
    }
    return false;
}

function isOverlappingAnotherButton(listOfButtons, xPosNewButton, yPosNewButton) {
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
    } while (isOverlappingAnotherButton(listOfButtons, xPos, yPos) || isOverlappingInstructions(xPos, yPos));

    const button = document.createElement('button');
    button.style.position = 'absolute';
    button.style.left = `${xPos}px`;
    button.style.top = `${yPos}px`;
    button.classList.add(classNameGeneratedButtons);

    document.body.appendChild(button);
    const buttonRect = button.getBoundingClientRect();

    button.width = buttonRect.width;
    button.height = buttonRect.height;
    button.xPos = xPos;
    button.yPos = yPos;

    button.addEventListener('click', () => {
        console.log("Hello, World!");
        button.disabled = true;
    });
    
    
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