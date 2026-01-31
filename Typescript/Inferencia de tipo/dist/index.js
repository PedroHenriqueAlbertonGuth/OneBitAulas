"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendSpaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`Acelerando a velocidade da ${spaceship.name} para ${targetSpeed}`);
    }
    else {
        alert(`Mantendo a velocidade da nave ${spaceship.name}`);
    }
}
const spaceshipName = prompt(`Insira o nome da nave`);
const captainName = prompt(`Insira o nome do capitão`);
sendSpaceship(spaceshipName, captainName);
//# sourceMappingURL=index.js.map