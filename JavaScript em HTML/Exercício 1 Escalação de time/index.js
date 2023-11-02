function scalePlayer() {
  const playerName = document.getElementById("playerName").value;
  const playerPosition = document.getElementById("playerPosition").value;
  const playerShirt = document.getElementById("playerShirt").value;
  const playerSection = document.getElementById("playerSection");

  scaleConfirm = "";

  do {
    let scaleConfirm = prompt(
      "Deseja escalar o jogador " +
        playerName +
        " de camisa " +
        playerShirt +
        " na posição " +
        playerPosition +
        "?" +
        "\n" +
        "(Sim/Não)"
    );

    if (scaleConfirm === "Sim" || "sim") {
      const playerUl = document.createElement("ul");
      playerUl.id = "player" + playerShirt;

      const nameLi = document.createElement("li");
      nameLi.innerText = "Nome: " + playerName;

      const positionLi = document.createElement("li");
      positionLi.innerText = "Posição: " + playerPosition;

      const shirtLi = document.createElement("li");
      shirtLi.innerText = "Camiseta: " + playerShirt;

      playerSection.appendChild(playerUl);
      playerUl.append(nameLi, positionLi, shirtLi);

      alert("O jogador " + playerName + " foi escalado com sucesso!");
      document.getElementById("playerName").value = "";
      document.getElementById("playerPosition").value = "";
      document.getElementById("playerShirt").value = "";
      break;
    } else if (scaleConfirm === "Não" || "não") {
      alert("O jogador não foi escalado.");
      break;
    } else {
      alert("Opção inválida.");
    }
  } while (scaleConfirm !== "Sim" || "Não");
}

function removePlayer() {
  const shirtPlayer = document.getElementById("playerRemovalShirt").value;
  playerRemoved = "";
  do {
    playerRemoved = prompt(
      "Deseja mesmo remover o jogador camisa " + shirtPlayer + "?"
    );
    if (playerRemoved === "Sim" || "sim") {
      const removePlayerUl = document.getElementById("player" + shirtPlayer);
      console.log(removePlayerUl);
      if (removePlayerUl.id === "player" + shirtPlayer) {
        alert("Removendo jogador");
        playerSection.removeChild(removePlayerUl);
        document.getElementById("playerRemovalShirt").value = "";
        break;
      } else {
        alert("Jogador não encontrado");
        break;
      }
    } else if (playerRemoved === "Não" || "não") {
      alert("O jogador não foi removido.");
      break;
    } else {
      alert("Opção inválida.");
    }
  } while (playerRemoved != "Sim" || "Não");
}
