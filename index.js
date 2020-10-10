// checks what type of drum we selected
function checkDrum(drum) {
    switch (drum) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "l":
            new Audio("sounds/crash.mp3").play();
            break;
        default:
            console.log("Error");
    }
}

// changes visual button when pressed
function buttonAnimation(drum) {
    let drumQuery = document.querySelector(`.${drum}`);
    drumQuery.classList.add("pressed"); // add class

    // this function will wait 200 to execute
    setTimeout(function () {
        drumQuery.classList.remove("pressed"); // remove class
    }, 200);
}

// checks drum by click
const drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        let drum = this.innerText;
        checkDrum(drum);
        buttonAnimation(drum);
    });
}

// checks drum by keyword
const drum = document.addEventListener("keypress", function (event) {
    let drumKey = event.key;
    checkDrum(drumKey);
    buttonAnimation(drumKey);
});
