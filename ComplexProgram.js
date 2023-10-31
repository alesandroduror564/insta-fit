// File Name: ComplexProgram.js

// This program generates a maze using a randomized algorithm
// and allows the user to navigate through it using keyboard inputs.

// Constants for the maze dimensions
const WIDTH = 25;
const HEIGHT = 25;

// Array to store the maze data
let maze = [];

// Function to initialize the maze with walls
function initializeMaze() {
  for (let row = 0; row < HEIGHT; row++) {
    maze[row] = [];
    for (let col = 0; col < WIDTH; col++) {
      maze[row][col] = "#";
    }
  }
}

// Recursive function to create a random maze
function createMaze(row, col) {
  maze[row][col] = " ";

  let directions = ["up", "down", "left", "right"];
  directions = shuffleArray(directions);

  for (let i = 0; i < directions.length; i++) {
    let direction = directions[i];

    let newRow = row;
    let newCol = col;

    if (direction === "up") newRow--;
    if (direction === "down") newRow++;
    if (direction === "left") newCol--;
    if (direction === "right") newCol++;

    if (newRow >= 0 && newRow < HEIGHT && newCol >= 0 && newCol < WIDTH && maze[newRow][newCol] === "#") {
      maze[(row + newRow) / 2][(col + newCol) / 2] = " ";
      createMaze(newRow, newCol);
    }
  }
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to print the maze
function printMaze() {
  for (let row = 0; row < HEIGHT; row++) {
    let line = "";
    for (let col = 0; col < WIDTH; col++) {
      line += maze[row][col];
    }
    console.log(line);
  }
}

// Function to handle keyboard inputs
function handleKeyPress(event) {
  let key = event.key;
  let currentRow = getRow();
  let currentCol = getCol();

  if (key === "ArrowUp" && maze[currentRow - 1][currentCol] !== "#") {
    moveUp();
  }
  if (key === "ArrowDown" && maze[currentRow + 1][currentCol] !== "#") {
    moveDown();
  }
  if (key === "ArrowLeft" && maze[currentRow][currentCol - 1] !== "#") {
    moveLeft();
  }
  if (key === "ArrowRight" && maze[currentRow][currentCol + 1] !== "#") {
    moveRight();
  }
}

// Function to get the current position of the player
function getPosition(symbol) {
  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      if (maze[row][col] === symbol) {
        return [row, col];
      }
    }
  }
  return null;
}

// Function to get the row of the player
function getRow() {
  let position = getPosition("X");
  return position[0];
}

// Function to get the column of the player
function getCol() {
  let position = getPosition("X");
  return position[1];
}

// Functions to move the player
function moveUp() {
  let currentRow = getRow();
  let currentCol = getCol();
  maze[currentRow][currentCol] = " ";
  maze[currentRow - 1][currentCol] = "X";
  printMaze();
}

function moveDown() {
  let currentRow = getRow();
  let currentCol = getCol();
  maze[currentRow][currentCol] = " ";
  maze[currentRow + 1][currentCol] = "X";
  printMaze();
}

function moveLeft() {
  let currentRow = getRow();
  let currentCol = getCol();
  maze[currentRow][currentCol] = " ";
  maze[currentRow][currentCol - 1] = "X";
  printMaze();
}

function moveRight() {
  let currentRow = getRow();
  let currentCol = getCol();
  maze[currentRow][currentCol] = " ";
  maze[currentRow][currentCol + 1] = "X";
  printMaze();
}

// Main function to run the program
function main() {
  initializeMaze();
  createMaze(0, 0);

  maze[0][0] = "X"; // Player's symbol
  maze[HEIGHT - 1][WIDTH - 1] = " "; // Goal symbol

  document.addEventListener("keydown", handleKeyPress);
  printMaze();
}

// Execute the main function
main();