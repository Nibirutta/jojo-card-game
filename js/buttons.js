const menu = document.getElementById("menu");
const mainMenu = document.getElementById("main-menu");
const optionsMenu = document.getElementById("options-menu");
const board = document.getElementById("board");
const leaderboard = document.getElementById("leaderboard");
const modeButtons = document.querySelectorAll(".mode-button");

let mode = "normal"; // Default mode

document.getElementById("start-button").addEventListener("click", function() {
    menu.classList.add("hidden");
    board.classList.remove("hidden");
});

document.getElementById("menu-button").addEventListener("click", function() {
    board.classList.add("hidden");
    menu.classList.remove("hidden");
});

document.getElementById("leaderboard-button").addEventListener("click", function() {
    leaderboard.style.width = "var(--leaderboard-width)";
    leaderboard.style.color = "var(--visible-color)";
});

document.getElementById("close-leaderboard-button").addEventListener("click", function() {
    leaderboard.style.width = "0px";
    leaderboard.style.color = "var(--font-hidden-color)";
});

function toggleMenu() {
    if (mainMenu.classList.contains("hidden")) {
        optionsMenu.classList.add("hidden");
        mainMenu.classList.remove("hidden");
    } else {
        optionsMenu.classList.remove("hidden");
        mainMenu.classList.add("hidden");
    }
}

modeButtons.forEach(button => {
    button.addEventListener("click", function() {
        switch (button.id) {
            case "normal-button":
                mode = "normal";
                break;
            case "hard-button":
                mode = "hard";
                break;
            case "easy-button":
                mode = "easy";
                break;
        }

        console.log("Selected mode:", mode);
    });
});