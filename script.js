window.onload = () => {
  render();
  btnRoll.classList.add("active");
};

let roll;
let positionTOBe;
let interval;
let turn = 0;
let currentPiece;
let loopNumber = 0;
let loopLimit = 3;
let hasRolled = false;

function intervalForMoveFunction() {
  interval = setInterval(moveFunction, 20);
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

function render() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ``;
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

  turnScreen.innerText = "Turn: " + turns[turn];
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
  turnScreen.innerText = "Turn: " + turns[turn];
  hasRolled = false;
  btnRoll.classList.add("active");
}

function incrementTurn() {
  turn++;
  turn > 3 ? (turn = 0) : null;
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
    return;
  }
  if (pieces[currentPiece].currentPostion >= 63 && turns[turn] === "yellow") {
    pieces[currentPiece].currentPostion = 90;
    positionTOBe = 90;
    return;
  }
  if (pieces[currentPiece].currentPostion >= 68 && turns[turn] === "blue") {
    pieces[currentPiece].currentPostion = 91;
    positionTOBe = 91;
    return;
  }
  if (pieces[currentPiece].currentPostion >= 73 && turns[turn] === "red") {
    pieces[currentPiece].currentPostion = 92;
    positionTOBe = 92;
    return;
  }
}

btnRoll.addEventListener("click", rollFunction);
function rollFunction() {
  if (!hasRolled) {
    roll = Number(inputRoll.value);
    // roll = Math.floor(Math.random() * 6 + 1);
    // roll > 6 ? (roll = 6) : null;
    // roll < 0 ? (roll = 1) : null;
    screen.innerText = roll;
    hasRolled = true;
    btnRoll.classList.remove("active");
    if (roll === 6) {
      checkTurn();
    } else {
      checkIfOut(turns[turn]);
    }
  }
}

function checkTurn() {
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
  if (pieces[num].currentPostion > 72) {
    if (roll === 6) {
      pieces[num].currentPostion = openingPosition;
      hasRolled = false;
      btnRoll.classList.add("active");
      render();
    } else {
      checkTurn();
    }
  } else if (pieces[num].currentPostion < 72) {
    positionTOBe = roll + pieces[num].currentPostion;
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
    canGoInHouse();
    didWin();
    render();
  } else {
    clearInterval(interval);
    incrementTurn();
    hasRolled = false;
    btnRoll.classList.add("active");
    turnScreen.innerText = "Turn: " + turns[turn];
  }
}
