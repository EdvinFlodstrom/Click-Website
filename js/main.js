'use strict';

const form = document.querySelector('#numberOfButtonsForm');
const numberInput = document.querySelector('#numberInput');
const submitButton = form.querySelector('button[type="submit"]');

numberInput.addEventListener('input', () => {
    ValidateNumberInput(numberInput.value);
});

function ValidateNumberInput(number) {
    console.log(`Hello, World! ${number}`);
}