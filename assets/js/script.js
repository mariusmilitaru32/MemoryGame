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

// function to open cards and count the moves
const onCardClick = (card) => {
    if (!gameStarted) return;
    if (openCards.length < 2 && !card.classList.contains("open")) {
        card.classList.add("open");
        openCards.push(card);
        if (openCards.length === 2) {
            setTimeout(checkMatch, 1000);
            moves++;
            movesDisplay.textContent = `Moves: ${moves}`;
        }
    }
};

// function to check if the cards are a match
const checkMatch = () => {
    const [card1, card2] = openCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        card1.classList.add("match");
        card2.classList.add("match");
        gameFinished();
    } else {
        card1.classList.remove("open");
        card2.classList.remove("open");
    }
    openCards = [];
};

// function to start the game
const startGame = () => {
    gameStarted = true;
    generateCardValues();
    updateGrid();
    moves = 0;
    movesDisplay.textContent = "Moves: 0";
    startTimer();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.classList.remove("open");
        card.classList.remove("match");
    });
};

// function to update the cards with symbols
const updateGrid = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
        card.dataset.symbol = cardValues[i];
        card.textContent = cardValues[i];
    });
};

createGrid();