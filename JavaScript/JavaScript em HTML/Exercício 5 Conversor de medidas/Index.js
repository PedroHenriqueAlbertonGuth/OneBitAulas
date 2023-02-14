const meterValue = prompt("Insira o valor em metros a ser convertido: ");
const convertOptions = Number(
  prompt(
    "Digite o número da unidade para qual deseja converter: \n1-Milímetro(mm),\n2-Centímetro(cm),\n3-Decímetro(dm),\n4-Decâmetro(dam),\n5-Hectômetro(hm) ou \n6-Quilômetro(km)."
  )
);

switch (convertOptions) {
  case 1:
    let milimeterValue = meterValue * 1000;
    alert("O valor de " + meterValue + "m = " + milimeterValue + "mm.");
    break
  case 2:
    let centimeterValue = meterValue * 100;
    alert("O valor de " + meterValue + "m = " + centimeterValue + "cm.");
    break
  case 3:
    let decimeterValue = meterValue * 10;
    alert("O valor de " + meterValue + "m = " + decimeterValue + "dm.");
    break
  case 4:
    let decameterValue = meterValue / 10;
    alert("O valor de " + meterValue + "m = " + decameterValue + "dam.");  
    break
  case 5:
    let hectometerValue = meterValue / 100;
    alert("O valor de " + meterValue + "m = " + hectometerValue + "hm."); 
    break
  case 6:
    let kilometerValue = meterValue / 1000;
    alert("O valor de " + meterValue + "m = " + kilometerValue + "km.");   
    break
  default:
    alert("Escolha uma opção válida!")  
}
