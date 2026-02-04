let allSpaceships: {
  name: string;
  pilot: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}[] = [];

function newSpaceship() {
  const spaceshipName = prompt("Insira o nome da nave") ?? "Nome desconhecido";
  const spaceshipPilot =
    prompt("Insira o nome do piloto") ?? "Piloto desconhecido";
  const spaceshiptCrewLimit = Number(
    prompt("Insira o tamanho máximo da tripulação"),
  );
  const newSpaceship = {
    name: spaceshipName,
    pilot: spaceshipPilot,
    crewLimit: spaceshiptCrewLimit,
    crew: [],
    inMission: false,
  };
  allSpaceships.push(newSpaceship);
}

function identifyShip() {
  const spaceshipName = prompt("Qual nave?") ?? "Nome desconhecido";
  return allSpaceships.filter((e) => e.name === spaceshipName);
}

function newCrewMember() {
  const currentSpaceship = identifyShip();
  if (currentSpaceship[0].crewLimit > currentSpaceship[0].crew.length) {
    const newCrewName =
      prompt("Qual o nome do novo membro?") ?? "Nome não escrito";
    currentSpaceship[0].crew.push(newCrewName);
  } else if (currentSpaceship[0].crewLimit <= currentSpaceship[0].crew.length) {
    alert("Não cabem mais tripulantes nessa nave");
  }
}

function sendOnMission() {
  const currentSpaceship = identifyShip();
  if (currentSpaceship[0].inMission === false) {
    if (
      currentSpaceship[0].crew.length >
      Number(Number(currentSpaceship[0].crewLimit / 3).toFixed(0))
    ) {
      currentSpaceship[0].inMission = true;
      alert("Nave enviada em missão!");
    } else {
      alert(
        `Tripulantes insuficientes, necessário ter mais que ${Number(Number(currentSpaceship[0].crewLimit / 3).toFixed(0))}`,
      );
    }
  } else {
    alert("Nave já está em missão");
  }
}

function showSpaceships() {
  allSpaceships.forEach((e) => console.table(e));
}
