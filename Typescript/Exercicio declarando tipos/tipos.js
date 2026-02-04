var allSpaceships = [];
function newSpaceship() {
    var _a, _b;
    var spaceshipName = (_a = prompt("Insira o nome da nave")) !== null && _a !== void 0 ? _a : "Nome desconhecido";
    var spaceshipPilot = (_b = prompt("Insira o nome do piloto")) !== null && _b !== void 0 ? _b : "Piloto desconhecido";
    var spaceshiptCrewLimit = Number(prompt("Insira o tamanho máximo da tripulação"));
    var newSpaceship = {
        name: spaceshipName,
        pilot: spaceshipPilot,
        crewLimit: spaceshiptCrewLimit,
        crew: [],
        inMission: false,
    };
    allSpaceships.push(newSpaceship);
}
function identifyShip() {
    var _a;
    var spaceshipName = (_a = prompt("Qual nave?")) !== null && _a !== void 0 ? _a : "Nome desconhecido";
    return allSpaceships.filter(function (e) { return e.name === spaceshipName; });
}
function newCrewMember() {
    var _a;
    var currentSpaceship = identifyShip();
    console.log(allSpaceships);
    if (currentSpaceship[0].crewLimit > currentSpaceship[0].crew.length) {
        var newCrewName = (_a = prompt("Qual o nome do novo membro?")) !== null && _a !== void 0 ? _a : "Nome não escrito";
        currentSpaceship[0].crew.push(newCrewName);
        console.log(allSpaceships);
    }
    else if (currentSpaceship[0].crewLimit <= currentSpaceship[0].crew.length) {
        alert("Não cabem mais tripulantes nessa nave");
    }
}
function sendOnMission() {
    var currentSpaceship = identifyShip();
    if (currentSpaceship[0].inMission === false) {
        if (currentSpaceship[0].crew.length >
            Number(Number(currentSpaceship[0].crewLimit / 3).toFixed(0))) {
            currentSpaceship[0].inMission = true;
        }
        else {
            alert("Tripulantes insuficientes, necess\u00E1rio ter mais que ".concat(Number(Number(currentSpaceship[0].crewLimit / 3).toFixed(0))));
        }
    }
    else {
        alert("Nave já está em missão");
    }
}
function showSpaceships() {
    allSpaceships.forEach(function (e) { return console.log(e); });
}
