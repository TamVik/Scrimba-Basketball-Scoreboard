
let firstNumber = 0;
let homeNumber = document.getElementById("home-number");
let secondNumber = 0;
let guestNumber = document.getElementById("guest-number");

function addHome1() {
    firstNumber += 1;
    homeNumber.textContent = firstNumber;
}

function addHome2() {
    firstNumber += 2;
    homeNumber.textContent = firstNumber;
}

function addHome3() {
    firstNumber += 3;
    homeNumber.textContent = firstNumber;
}


function addGuest1() {
    secondNumber += 1;
    guestNumber.textContent = secondNumber;
}

function addGuest2() {
    secondNumber += 2;
    guestNumber.textContent = secondNumber;
}

function addGuest3() {
    secondNumber += 3;
    guestNumber.textContent = secondNumber;
}