function scalePlayer() {
  const playerName = document.getElementById("playerName");
  const playerPosition = document.getElementById("playerPosition");
  const playerShirt = document.getElementById("playerShirt");
  const playerSection = document.getElementById("playerSection");

  scaleConfirm = "";
  do {
    let scaleConfirm = prompt(
      "Deseja escalar o jogador " +
        playerName.value +
        " de camisa " +
        playerShirt.value +
        " na posição " +
        playerPosition.value +
        "?" +
        "\n" +
        "(Sim/Não)"
    );
    if (scaleConfirm === "Sim") {
      const playerUl = document.createElement("ul");
      playerUl.id = "player" + playerName.value;
      const nameLi = document.createElement("li");
      nameLi.innerText = "Nome: " + playerName.value;
      const positionLi = document.createElement("li");
      positionLi.innerText = "Posição: " + playerPosition.value;
      const shirtLi = document.createElement("li");
      shirtLi.innerText = "Camiseta: " + playerShirt.value;

      playerSection.appendChild(playerUl);
      playerUl.append(nameLi, positionLi, shirtLi);
      break;
    } else if (scaleConfirm === "Não") {
      alert("O jogador não foi escalado.");
      break;
    } else {
      alert("Opção inválida.");
    }
  } while (scaleConfirm !== "Sim" || "Não");
}

function removePlayer() {
  playerRemoved = "";
  do {
    let playerToBeRemoved = parseFloat(
      prompt("Qual o número da camiseta do jogador que será removido?")  
    );
    playerRemoved = prompt("Deseja ")
  } while (playerRemoved != "Sim" || "Não");
}
