// Buttons and Variables
var display = document.getElementById("rgb-value");
var play_again = document.getElementById("play-again");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var message = document.getElementById("message");
var name_section = document.getElementById("name-section");
var answer;
var red;
var green;
var blue;
var fails;
var difficulty = 0;
var gameEnded = 0;



// Functions
const start = () => {
    // Clear placeholders (I could remove them completely from the start but)
    color1.innerHTML = "";
    color2.innerHTML = "";
    color3.innerHTML = "";

    // Reset values
    fails = 0;
    name_section.style = "background: var(--orange-color);";
    gameEnded = 0;
    message.innerHTML = difficulty === 0? "MODE: EASY": "MODE: HARD";

    // Generate color to guess
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    display.innerHTML = `RGB(${red}, ${green}, ${blue})`;

    // Generate random colors
    answer = Math.floor(Math.random() * 3);
    switch (difficulty) {
        case 0:
            var red1 = Math.floor(Math.random() * 256);
            var green1 = Math.floor(Math.random() * 256);
            var blue1 = Math.floor(Math.random() * 256);
            var red2 = Math.floor(Math.random() * 256);
            var green2 = Math.floor(Math.random() * 256);
            var blue2 = Math.floor(Math.random() * 256);
            switch (answer) {
                case (0):
                    color1.style = `background: rgb(${red}, ${green}, ${blue});`;
                    color2.style = `background: rgb(${red1}, ${green1}, ${blue1});`;
                    color3.style = `background: rgb(${red2}, ${green2}, ${blue2});`;
                    break;
                case (1):
                    color1.style = `background: rgb(${red1}, ${green1}, ${blue1});`;
                    color2.style = `background: rgb(${red}, ${green}, ${blue});`;
                    color3.style = `background: rgb(${red2}, ${green2}, ${blue2});`;
                    break;
                case (2):
                    color1.style = `background: rgb(${red1}, ${green1}, ${blue1});`;
                    color2.style = `background: rgb(${red2}, ${green2}, ${blue2});`;
                    color3.style = `background: rgb(${red}, ${green}, ${blue});`;
                    break;
                default:
                    // Should never occur but just to have a default case
                    color2.innerHTML = `Error: please click "Play Again"`;
                    throw "Error: generating colors failed";
            }
            break;
        case 1:
            var red1 = red + getRandom();
            var green1 = green + getRandom();
            var blue1 = blue + getRandom();
            var red2 = red + getRandom();
            var green2 = green + getRandom();
            var blue2 = blue + getRandom();
            switch (answer) {
                case (0):
                    color1.style = `background: rgb(${red}, ${green}, ${blue});`;
                    color2.style = `background: rgb(${red1}, ${green1}, ${blue1});`;
                    color3.style = `background: rgb(${red2}, ${green2}, ${blue2});`;
                    break;
                case (1):
                    color1.style = `background: rgb(${red1}, ${green1}, ${blue1});`;
                    color2.style = `background: rgb(${red}, ${green}, ${blue});`;
                    color3.style = `background: rgb(${red2}, ${green2}, ${blue2});`;
                    break;
                case (2):
                    color1.style = `background: rgb(${red1}, ${green1}, ${blue1});`;
                    color2.style = `background: rgb(${red2}, ${green2}, ${blue2});`;
                    color3.style = `background: rgb(${red}, ${green}, ${blue});`;
                    break;
                default:
                    // Should never occur but just to have a default case
                    color2.innerHTML = `Error: please click "Play Again"`;
                    throw "Error: generating colors failed";
            }
            break;
        default:
            // Should never occur but just to have a default case
            color2.innerHTML = `Error: please click "Play Again"`;
            throw "Error: setting difficulty failed";
    }
}

const getRandom = () => {
    var rand = Math.floor(Math.random() * 50);
    return rand < 25? rand - 50: rand;
}

const win = () => {
    name_section.style = `background: rgb(${red}, ${green}, ${blue});`;
    color1.style = `background: rgb(${red}, ${green}, ${blue});`;
    color2.style = `background: rgb(${red}, ${green}, ${blue});`;
    color3.style = `background: rgb(${red}, ${green}, ${blue});`;
    message.innerHTML = "CORRECT";
    gameEnded = 1;
}

const failed = (n) => {
    fails++;
    if (fails === 2) {
        message.innerHTML = "BETTER LUCK NEXT TIME";
        color1.style = "background: var(--light-grey-color);";
        color2.style = "background: var(--light-grey-color);";
        color3.style = "background: var(--light-grey-color);";
        gameEnded = 1;
    } else {
        switch (n) {
            case 0:
                color1.style = "background: var(--light-grey-color);";
                break;
            case 1:
                color2.style = "background: var(--light-grey-color);";
                break;
            case 2:
                color3.style = "background: var(--light-grey-color);";
                break;
            default:
                // Should never occur but just to have a default case
                color2.innerHTML = `Error: please click "Play Again"`;
                throw "Error: generating colors failed";
        }
    }
}

const guess = (n) => {
    if (gameEnded === 0) {
        if (n === answer) {
            win();
        } else {
            failed(n);
        }
    }
}



// Interactions
window.onload = () => {
    difficulty = 0;
    start();
}

play_again.onclick = () => {
    start();
}

color1.onclick = () => {
    guess(0);
}

color2.onclick = () => {
    guess(1);
}

color3.onclick = () => {
    guess(2);
}

easy.onclick = () => {
    difficulty = 0;
    start();
}

hard.onclick = () => {
    difficulty = 1;
    start();
}


