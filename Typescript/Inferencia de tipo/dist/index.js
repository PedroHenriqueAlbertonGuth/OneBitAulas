var _a, _b;
function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Acelerando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da nave ".concat(spaceship.name));
    }
}
var spaceshipName = (_a = prompt("Insira o nome da nave")) !== null && _a !== void 0 ? _a : "Nave Desconhecida";
var captainName = (_b = prompt("Insira o nome do capitão")) !== null && _b !== void 0 ? _b : "Capitão Desconhecido";
sendSpaceship(spaceshipName, captainName);
var currentShip = sendSpaceship(spaceshipName, captainName);
var speed = Number(prompt("Insira a velocidade que deseja acelerar"));
accelerate(speed, currentShip);
