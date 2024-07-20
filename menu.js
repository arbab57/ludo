const btn4Players = document.querySelector("#play-btn-4");
const btn2Players = document.querySelector("#play-btn-2");
const btn1Players = document.querySelector("#play-btn-1");

btn4Players.addEventListener("click", () => {
  setGameMode(4);
});
btn2Players.addEventListener("click", () => {
  setGameMode(2);
});
btn1Players.addEventListener("click", () => {
  setGameMode(1);
});
function setGameMode(gameMode) {
  localStorage.removeItem("gamemode");
  localStorage.setItem("gamemode", JSON.stringify(gameMode));
  window.location.replace("http://127.0.0.1:5500/ludo/game.html");
}
