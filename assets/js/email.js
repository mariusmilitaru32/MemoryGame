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
