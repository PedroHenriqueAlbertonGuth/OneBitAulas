const main = document.querySelector("main");
const root = document.querySelector(":root");
const gameDivBtn = document.querySelectorAll("#gameDiv button");
const currentPlaying = document.getElementById("playing");
let ganhou = true;
let xChecked = [];
let oChecked = [];

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--primary-color", "#059e3f");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});

function play(ev) {
  const playerOne = document.getElementById("playerOne").value;
  const playerTwo = document.getElementById("playerTwo").value;
  const gameDivBtnDisabled = document.querySelectorAll("#gameDiv button");
  let currentBtn = ev.currentTarget;
  if (currentPlaying.value === "Vez de: " + playerOne) {
    currentBtn.style.setProperty("color", "var(--X-color)");
    currentBtn.innerText = "X";
    currentBtn.disabled = true;
    currentBtn.style.setProperty("cursor", "default");
    xChecked.push(currentBtn.dataset.value);
    currentPlaying.value = "Vez de: " + playerTwo;
  } else {
    currentBtn.style.setProperty("color", "var(--O-color)");
    currentBtn.innerText = "O";
    currentBtn.disabled = true;
    currentBtn.style.setProperty("cursor", "default");
    oChecked.push(currentBtn.dataset.value);
    currentPlaying.value = "Vez de: " + playerOne;
  }

  const winConditions = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];
  function winConditionCheck(array) {
    let winner = [];
    let winnerBtns = [];
    for (let i = 0; i < winConditions.length; i++) {
      const winCondition = winConditions[i];
      if (winCondition.every((v) => array.includes(v))) {
        winner.push(winCondition);
        let winnerBtn1 = document.querySelector(
          'button[data-value ="' + winner[0][0] + '"'
        );
        let winnerBtn2 = document.querySelector(
          'button[data-value ="' + winner[0][1] + '"'
        );
        let winnerBtn3 = document.querySelector(
          'button[data-value ="' + winner[0][2] + '"'
        );
        winnerBtns.push(winnerBtn1, winnerBtn2, winnerBtn3);
        winnerBtns.forEach(function (btn) {
          btn.style.setProperty("background-color", "var(--primary-color)");
        });
        if (winnerBtn1.innerText === "X") {
          currentPlaying.value = playerOne + " ganhou o jogo!";
        } else {
          currentPlaying.value = playerTwo + " ganhou o jogo!";
        }
        gameDivBtn.forEach(function (btn) {
          btn.disabled = true;
          btn.style.setProperty("cursor", "default");
        });
        ganhou = false;
      }
    }
    return winner;
  }
  winConditionCheck(xChecked);
  winConditionCheck(oChecked);
  console.log(ganhou);
  if (
    gameDivBtnDisabled.item(0).disabled &&
    gameDivBtnDisabled.item(1).disabled &&
    gameDivBtnDisabled.item(2).disabled &&
    gameDivBtnDisabled.item(3).disabled &&
    gameDivBtnDisabled.item(4).disabled &&
    gameDivBtnDisabled.item(5).disabled &&
    gameDivBtnDisabled.item(6).disabled &&
    gameDivBtnDisabled.item(7).disabled &&
    gameDivBtnDisabled.item(8).disabled &&
    ganhou
  ) {
    currentPlaying.value = "O jogo empatou!";
  }
}
document.getElementById("playBtn").addEventListener("click", function () {
  const playerOne = document.getElementById("playerOne").value;
  currentPlaying.value = "Vez de: " + playerOne;
  gameDivBtn.forEach(function (btn) {
    btn.addEventListener("click", play);
  });
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("playing").value = "";
  document.getElementById("playerOne").value = "";
  document.getElementById("playerTwo").value = "";
  document.querySelectorAll("#gameDiv button").forEach(function (btn) {
    btn.removeEventListener("click", play);
    btn.disabled = false;
    btn.style.setProperty("cursor", "pointer");
    btn.style.setProperty("background-color", "var(--bg-color)");
    btn.innerText = "";
    xChecked = [];
    oChecked = [];
    ganhou = true;
  });
});
