
let homeDefault = 0;
let homeNumber = document.getElementById("home-number");
let guestDefault = 0;
let guestNumber = document.getElementById("guest-number");

function addHome1() {
    homeDefault += 1;
    homeNumber.textContent = homeDefault;
}

function addHome2() {
    homeDefault += 2;
    homeNumber.textContent = homeDefault
}

function addHome3() {
    homeDefault += 3;
    homeNumber.textContent = homeDefault;
}


function addGuest1() {
    guestDefault += 1;
    guestNumber.textContent = guestDefault;
}

function addGuest2() {
    guestDefault += 2;
    guestNumber.textContent = guestDefault;
}

function addGuest3() {
    guestDefault += 3;
    guestNumber.textContent = guestDefault;
}

function newGame() {
    homeDefault = 0;
    guestDefault = 0;
    homeNumber.textContent = homeDefault;
    guestNumber.textContent = guestDefault;
}
