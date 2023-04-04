function setPlayersName(playerId) {
  const playerName = document.getElementById(playerId).innerText;
  const playerList = document.getElementById("players-list");
  const listItem = document.createElement("li");
  listItem.innerText = playerName;
  const li = document.querySelectorAll("#players-list li");
  if (li.length <= 4) {
    playerList.appendChild(listItem);
  } else {
    alert("You can't add more players");
  }
}

document.getElementById("btn-1").addEventListener("click", function () {
  setPlayersName("player-1");
});
document.getElementById("btn-2").addEventListener("click", function () {
  setPlayersName("player-2");
});
document.getElementById("btn-3").addEventListener("click", function () {
  setPlayersName("player-3");
});
document.getElementById("btn-4").addEventListener("click", function () {
  setPlayersName("player-4");
});
document.getElementById("btn-5").addEventListener("click", function () {
  setPlayersName("player-5");
});
document.getElementById("btn-6").addEventListener("click", function () {
  setPlayersName("player-6");
});
document.getElementById("btn-7").addEventListener("click", function () {
  setPlayersName("player-7");
});
document.getElementById("btn-8").addEventListener("click", function () {
  setPlayersName("player-8");
});
document.getElementById("btn-9").addEventListener("click", function () {
  setPlayersName("player-9");
});
