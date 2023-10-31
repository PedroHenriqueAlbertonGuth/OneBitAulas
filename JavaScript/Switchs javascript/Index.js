const result = prompt("Escolha uma alternativa: \n1,\n2,\n3.")
const numberResult = Number(result)

switch (numberResult) {
  case 1 :
    alert("O resultado é 'a'")
    break
  case 2 : 
    alert("O resultado é 'b'")
    break
  case 3 :
    alert("O resultado é 'c'")
    break
  default:
    alert("Finalizando...")     
}