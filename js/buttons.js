const menu = document.getElementById("menu");
const mainMenu = document.getElementById("main-menu");
const optionsMenu = document.getElementById("options-menu");
const board = document.getElementById("board");
const startButton = document.getElementById("start-button");
const optionsButton = document.getElementById("options-button");
const menuButton = document.getElementById("menu-button");
const returnButton = document.getElementById("return-button");

let mode = "normal"; // Default mode

startButton.addEventListener("click", function() {
    menu.classList.add("hidden");
    board.classList.remove("hidden");
});

menuButton.addEventListener("click", function() {
    board.classList.add("hidden");
    menu.classList.remove("hidden");
});

optionsButton.addEventListener("click", function() {
    optionsMenu.classList.remove("hidden");
    mainMenu.classList.add("hidden");
});

returnButton.addEventListener("click", function() {
    optionsMenu.classList.add("hidden");
    mainMenu.classList.remove("hidden");
});