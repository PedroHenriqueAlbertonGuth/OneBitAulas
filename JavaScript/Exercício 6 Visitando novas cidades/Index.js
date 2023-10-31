const turistName = prompt("Olá, qual o seu nome?")
let visitBoolean = prompt("Você já visitou alguma cidade diferente? \nSim/Não")
let totalCities = 0
let cityNames = ""
if (visitBoolean == "Sim") {
  do {
    let cityName = prompt("Qual cidade você visitou?")
    visitsWhile = prompt("Você visitou alguma outra cidade? \nSim/Não")
    cityNames += " - " + cityName  + "\n"
    totalCities++ 
  } while (visitsWhile == "Sim");
  alert("O turista: " + turistName + 
  "\nJá visitou " +  totalCities + " cidades" + 
  "\nCidades visitadas: " +cityNames) 
} else if (visitBoolean == "Não") {
  alert("Que pena, espero que consiga visitar alguma um dia.")
} else {
  alert("Por favor, digite apenas Sim ou Não.")
}


