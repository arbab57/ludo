window.onload = () => {
  render();
  btnRoll.classList.add("active");
};

const sound = new Audio();

let roll;
let positionTOBe;
let interval;
let turn = 0;
let currentPiece;
let loopNumber = 0;
let loopLimit = 3;
let hasRolled = false;
let score = {
  green: 0,
  yellow: 0,
  blue: 0,
  red: 0,
};
let winnerboard = [];
let scoreboard = [];
let diceSounds = ["dice1.mp3", "dice2.mp3"];

function intervalForMoveFunction() {
  interval = setInterval(moveFunction, 400);
}

function removeEvent() {
  pieceg1.removeEventListener("click", pieceFunction0);
  pieceg2.removeEventListener("click", pieceFunction1);
  pieceg3.removeEventListener("click", pieceFunction2);
  pieceg4.removeEventListener("click", pieceFunction3);

  piecey1.removeEventListener("click", pieceFunction4);
  piecey2.removeEventListener("click", pieceFunction5);
  piecey3.removeEventListener("click", pieceFunction6);
  piecey4.removeEventListener("click", pieceFunction7);

  pieceb1.removeEventListener("click", pieceFunction8);
  pieceb2.removeEventListener("click", pieceFunction9);
  pieceb3.removeEventListener("click", pieceFunction10);
  pieceb4.removeEventListener("click", pieceFunction11);

  piecer1.removeEventListener("click", pieceFunction12);
  piecer2.removeEventListener("click", pieceFunction13);
  piecer3.removeEventListener("click", pieceFunction14);
  piecer4.removeEventListener("click", pieceFunction15);
}
function win() {
  if (score.green === 4) {
    winnerboard.shift("green");
  }
  if (score.yellow === 4) {
    winnerboard.shift("yellow");
  }
  if (score.blue === 4) {
    winnerboard.shift("blue");
  }
  if (score.red === 4) {
    winnerboard.shift("red");
  }
}

function ui() {
  const uibox = document.querySelector("#uibox");
  uibox.classList.remove("top-l", "top-r", "bot-l", "bot-r");
  if (turns[turn] === "green") {
    uibox.classList.add("top-r");
  }
  if (turns[turn] === "yellow") {
    uibox.classList.add("bot-r");
  }
  if (turns[turn] === "blue") {
    uibox.classList.add("bot-l");
  }
  if (turns[turn] === "red") {
    uibox.classList.add("top-l");
  }
}

function activePiece() {
  for (let i = 0; i < pieces.length; i++) {
    document.querySelector(`#${pieces[i].id}`).classList.remove("active2");
  }
  if (turns[turn] === "green") {
    loopNumber = 0;
    loopLimit = 4;
  }
  if (turns[turn] === "yellow") {
    loopNumber = 4;
    loopLimit = 8;
  }
  if (turns[turn] === "blue") {
    loopNumber = 8;
    loopLimit = 12;
  }
  if (turns[turn] === "red") {
    loopNumber = 12;
    loopLimit = 16;
  }

  for (let i = loopNumber; i < loopLimit; i++) {
    document.querySelector(`#${pieces[i].id}`).classList.add("active2");
  }
}

function render() {
  ui();
  win();

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }

  for (let i = 0; i < pieces.length; i++) {
    squares[pieces[i].currentPostion].insertAdjacentHTML(
      "beforeend",
      pieces[i].html
    );
  }

  const piecesArray = document.querySelectorAll(".piece");
  for (let i = 0; i < piecesArray.length; i++) {
    piecesArray[i].innerHTML = `<i class="fa-solid fa-star star"></i>`;
  }

  updateTurnScreen();
}

function checkIfOut(house) {
  if (house === "green") {
    loopNumber = 0;
    loopLimit = 4;
  }
  if (house === "yellow") {
    loopNumber = 4;
    loopLimit = 8;
  }
  if (house === "blue") {
    loopNumber = 8;
    loopLimit = 12;
  }
  if (house === "red") {
    loopNumber = 12;
    loopLimit = 16;
  }

  for (let i = loopNumber; i < loopLimit; i++) {
    if (pieces[i].currentPostion < 72) {
      checkTurn();
      return;
    }
  }
  incrementTurn();

  updateTurnScreen();
  hasRolled = false;
  btnRoll.classList.add("active");
}

function incrementTurn() {
  let isInGame;
  isInGame = false;
  let loopLimit1;
  let loopNumber1;

  turn++;
  turn > 3 ? (turn = 0) : null;

  if (turns[turn] === "green") {
    loopNumber1 = 0;
    loopLimit1 = 4;
  }
  if (turns[turn] === "yellow") {
    loopNumber1 = 4;
    loopLimit1 = 8;
  }
  if (turns[turn] === "blue") {
    loopNumber1 = 8;
    loopLimit1 = 12;
  }
  if (turns[turn] === "red") {
    loopNumber1 = 12;
    loopLimit1 = 16;
  }

  for (let i = loopNumber1; i < loopLimit1; i++) {
    if (pieces[i].currentPostion < 89) {
      isInGame = true;
      break;
    }
  }

  if (!isInGame) {
    incrementTurn();
  }

  ui();
}

function canGoInHouse() {
  if (pieces[currentPiece].currentPostion === 2 && turns[turn] === "green") {
    pieces[currentPiece].currentPostion = 53;
    positionTOBe = positionTOBe + 51;

    return;
  }
  if (pieces[currentPiece].currentPostion === 15 && turns[turn] === "yellow") {
    pieces[currentPiece].currentPostion = 58;
    positionTOBe = positionTOBe + 43;

    return;
  }
  if (pieces[currentPiece].currentPostion === 28 && turns[turn] === "blue") {
    pieces[currentPiece].currentPostion = 63;
    positionTOBe = positionTOBe + 35;

    return;
  }
  if (pieces[currentPiece].currentPostion === 41 && turns[turn] === "red") {
    pieces[currentPiece].currentPostion = 68;
    positionTOBe = positionTOBe + 27;

    return;
  }
}

function didWin() {
  if (pieces[currentPiece].currentPostion >= 58 && turns[turn] === "green") {
    pieces[currentPiece].currentPostion = 89;
    positionTOBe = 89;
    score.green++;
    return;
  }
  if (pieces[currentPiece].currentPostion >= 63 && turns[turn] === "yellow") {
    pieces[currentPiece].currentPostion = 90;
    positionTOBe = 90;
    score.yellow++;
    return;
  }
  if (pieces[currentPiece].currentPostion >= 68 && turns[turn] === "blue") {
    pieces[currentPiece].currentPostion = 91;
    positionTOBe = 91;
    score.blue++;
    return;
  }
  if (pieces[currentPiece].currentPostion >= 73 && turns[turn] === "red") {
    pieces[currentPiece].currentPostion = 92;
    positionTOBe = 92;
    score.red++;
    return;
  }
}
function isAlone() {
  let count = 0;
  let moveItself;

  if (turns[turn] === "green") {
    for (let i = 0; i < 4; i++) {
      if (pieces[i].currentPostion <= 72) {
        moveItself = i;
        count++;
      }
    }
  } else if (turns[turn] === "yellow") {
    for (let i = 4; i < 8; i++) {
      if (pieces[i].currentPostion <= 72) {
        moveItself = i;
        count++;
      }
    }
  } else if (turns[turn] === "blue") {
    for (let i = 8; i < 12; i++) {
      if (pieces[i].currentPostion <= 72) {
        moveItself = i;
        count++;
      }
    }
  } else if (turns[turn] === "red") {
    for (let i = 12; i < 16; i++) {
      if (pieces[i].currentPostion <= 72) {
        moveItself = i;
        count++;
      }
    }
  }

  if (count === 1) {
    console.log(moveItself);
    pieceFunction(moveItself);
    return true;
  } else {
    return false;
  }
}

btnRoll.addEventListener("click", rollFunction);
function rollFunction() {
  if (!hasRolled) {
    // sound.src = diceSounds[1];
    // sound.play();
    // roll = Number(inputRoll.value);
    roll = Math.floor(Math.random() * 6 + 1);
    roll > 6 ? (roll = 6) : null;
    roll < 0 ? (roll = 1) : null;
    screen.innerText = roll;
    hasRolled = true;
    btnRoll.classList.remove("active");

    if (roll === 6) {
      checkTurn();
    } else {
      if (isAlone()) {
        return;
      }
      checkIfOut(turns[turn]);
    }
  }
}

function checkTurn() {
  activePiece();
  removeEvent();
  if (turns[turn] === "green") {
    pieceg1.addEventListener("click", pieceFunction0);
    pieceg2.addEventListener("click", pieceFunction1);
    pieceg3.addEventListener("click", pieceFunction2);
    pieceg4.addEventListener("click", pieceFunction3);
  }
  if (turns[turn] === "yellow") {
    piecey1.addEventListener("click", pieceFunction4);
    piecey2.addEventListener("click", pieceFunction5);
    piecey3.addEventListener("click", pieceFunction6);
    piecey4.addEventListener("click", pieceFunction7);
  }
  if (turns[turn] === "blue") {
    pieceb1.addEventListener("click", pieceFunction8);
    pieceb2.addEventListener("click", pieceFunction9);
    pieceb3.addEventListener("click", pieceFunction10);
    pieceb4.addEventListener("click", pieceFunction11);
  }
  if (turns[turn] === "red") {
    piecer1.addEventListener("click", pieceFunction12);
    piecer2.addEventListener("click", pieceFunction13);
    piecer3.addEventListener("click", pieceFunction14);
    piecer4.addEventListener("click", pieceFunction15);
  }
}

function pieceFunction(num, openingPosition) {
  removeEvent();
  currentPiece = num;
  if (pieces[currentPiece].currentPostion >= 89) {
    checkTurn();
    return;
  }
  if (pieces[currentPiece].currentPostion > 72) {
    if (roll === 6) {
      pieces[currentPiece].currentPostion = openingPosition;
      hasRolled = false;
      btnRoll.classList.add("active");
      render();
      sound.src = "move-self.mp3";
      sound.play();
    } else {
      checkTurn();
    }
  } else {
    positionTOBe = roll + pieces[currentPiece].currentPostion;
    intervalForMoveFunction();
  }
}

function moveFunction() {
  if (pieces[currentPiece].currentPostion !== positionTOBe) {
    pieces[currentPiece].currentPostion++;
    if (pieces[currentPiece].currentPostion === 52) {
      pieces[currentPiece].currentPostion = 0;
      positionTOBe = positionTOBe - 52;
    }
    sound.src = "move-self.mp3";
    canGoInHouse();
    didWin();
    if (pieces[currentPiece].currentPostion === positionTOBe) {
      canKill(currentPiece);
    }
    render();
    sound.play();
  } else {
    if (roll === 6) {
      clearInterval(interval);
      hasRolled = false;
      btnRoll.classList.add("active");
      updateTurnScreen();
    } else {
      clearInterval(interval);
      incrementTurn();
      hasRolled = false;
      btnRoll.classList.add("active");
      updateTurnScreen();
    }
  }
}

function updateTurnScreen() {
  turnScreen.innerText = "Turn: " + turns[turn];
}

function canKill(crrpiece) {
  for (let i = 0; i < pieces.length; i++) {
    if (
      pieces[i].currentPostion === pieces[crrpiece].currentPostion &&
      pieces[i].team !== pieces[crrpiece].team
    ) {
      if (
        pieces[i].currentPostion === 3 ||
        pieces[i].currentPostion === 11 ||
        pieces[i].currentPostion === 16 ||
        pieces[i].currentPostion === 24 ||
        pieces[i].currentPostion === 29 ||
        pieces[i].currentPostion === 37 ||
        pieces[i].currentPostion === 42 ||
        pieces[i].currentPostion === 50
      ) {
        null;
      } else {
        pieces[i].currentPostion = pieces[i].startingPostion;
        sound.src = "capture.mp3";
      }
    }
  }
}
