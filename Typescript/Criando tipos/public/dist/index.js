// let literal: "Hello, world";
// let pi: 3.14159;
// let option: "Yes" | "No" | "Maybe";
// option = "Yes";
// type Planet =
//   | "Mercúrio"
//   | "Vênus"
//   | "Terra"
//   | "Marte"
//   | "Júpiter"
//   | "Saturno"
//   | "Urano"
//   | "Netuno"
//   | "Plutão";
// let planet: Planet;
// let homePlanet: Planet;
// type greetingCallback = (name: string) => void;
// function checkPlanet(planet: Planet) {
//   if ((planet = "Júpiter")) {
//     console.log("estamos em júpiter");
//   }
// }
// function greet(callbackfn: greetingCallback) {
//   let name = "Pedro";
//   callbackfn(name);
// }
let allPlanets = [];
function findPlanet(nome) {
    return allPlanets.find((e) => e.nome === nome);
}
function savePlanet(planet) {
    allPlanets.push(planet);
    alert(`O planeta ${planet.nome} foi adicionado a lista.`);
}
function createPlanet() {
    const nome = prompt("Qual o nome do planeta?");
    const coordenadas = [
        Number(prompt(`Qual a coordenada x?`)),
        Number(prompt(`Qual a coordenada y?`)),
    ];
    const situacao = prompt(`Qual a situação do planeta?
    "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"`);
    let satelite;
    let satelites = [];
    do {
        satelite = prompt(`Escreva o nome do satélite, digite 2 para finalizar`);
        if (satelite !== "2") {
            satelites.push(satelite);
        }
    } while (satelite != 2);
    return { nome, coordenadas, situacao, satelites };
}
function updatePlanetSituation(nome, situation) {
    const planet = findPlanet(nome);
    planet.situacao = situation;
}
function addSatelite(nome, [...satelite]) {
    const planet = findPlanet(nome);
    satelite.forEach((element) => {
        planet.satelites.push(element);
    });
}
function removeSatelite(nomePlaneta, nomeSatelite) {
    const planet = findPlanet(nomePlaneta);
    planet.satelites = planet.satelites.filter((e) => e === nomeSatelite);
}
function listPlanets() {
    allPlanets.forEach((e) => {
        alert(`O Planeta ${e.nome}, de coordenadas ${e.coordenadas} está em situação ${e.situacao} e tem os satelites ${e.satelites}`);
    });
}
/**
 * Menu
 */
let userOption = 0;
while (userOption !== 6) {
    const menu = `Painel Principal
    1 - Registrar novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar satelite
    4 - Remover satelite
    5 - Listar planetas
    6 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            const planet = createPlanet();
            savePlanet(planet);
            break;
        case 2:
            updatePlanetSituation(prompt("Qual o nome do planeta?"), prompt(`Qual a situação do planeta? Habitado" | "Habitável" | "Inabitável" | "Inexplorado`));
            break;
        case 3:
            let userOption = 0;
            let satelites = [];
            do {
                const satelite = prompt(`Escreva o nome do satélite, digite 2 para finalizar`);
                if (satelite !== "2") {
                    satelites.push(satelite);
                }
                else {
                    break;
                }
            } while (userOption != 2);
            addSatelite(prompt("Qual o nome do planeta?"), satelites);
            break;
        case 4:
            removeSatelite(prompt("Qual o nome do planeta?"), prompt("Qual o nome do satélite?"));
            break;
        case 5:
            listPlanets();
            break;
        case 6:
            alert("Encerrando o sistema...");
            break;
        default:
            alert("Opção inválida! Retornando ao painel principal...");
            break;
    }
}
