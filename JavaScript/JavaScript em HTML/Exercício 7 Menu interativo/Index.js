let result = 1
do {
  const result = Number(
    prompt(
      "Escolha uma alternativa:" +
        " \n1 - Opção a," +
        "\n2 - Opção b," +
        "\n3 - Opção c," +
        "\n4 - Opção d," +
        "\n5 - Encerrar."
    )
  );

  if (result == 1) {
    alert("Você escolheu a opção a");
  } else if (result == 2) {
    alert("Você escolheu a opção b");
  } else if (result == 3) {
    alert("Você escolheu a opção c");
  } else if (result == 4) {
    alert("Você escolheu a opção d");
  } else if (result == 5) {
    alert("Sistema encerrando...");
    break
  }
} while (result == 1);
