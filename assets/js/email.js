// variables to get game elements 
const gridContainer = document.querySelector(".grid");
const startButton = document.getElementById("start-button");
const movesDisplay = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const grid = document.getElementById("grid");
const resetButton = document.getElementById("reset-button");

// variables to store game data
let cardValues = [];
let openCards = [];
let moves = 0;
let startTime = 0;
let timerInterval;
let gameStarted = false;

// function to generate random cards from symbols
const generateCardValues = () => {
    const symbols = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌"];
    const values = [];

    for (let i = 0; i < 8; i++) {
        const symbol = symbols[i % symbols.length];
        values.push(symbol, symbol);
    }

    values.sort(() => Math.random() - 0.5);
    cardValues = values;
};

//function to create the game board grid on index page
const createGrid = () => {
    gridContainer.innerHTML = "";
    for (let i = 0; i < 16; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.index = i;
        card.dataset.symbol = cardValues[i];
        card.textContent = cardValues[i];
        card.addEventListener("click", () => onCardClick(card));
        gridContainer.appendChild(card);
    }
};
