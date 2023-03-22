let likeCounter = 0;
let disCounter = 0;

function incrementClick() {
    updateDisplay(++likeCounter);
}

function incrementClickD() {
    updateDisplay(++disCounter);
}

function updateDisplayD(disCounter) {
    document.getElementById("counter-label-dis").innerHTML = disCounter;
}

function updateDisplay(likeCounter) {
    document.getElementById("counter-label-like").innerHTML = likeCounter;
}
