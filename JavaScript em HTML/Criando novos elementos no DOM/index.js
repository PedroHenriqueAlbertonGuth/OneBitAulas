function addInput() {
  const ul = document.getElementById("inputs");

  const newLI = document.createElement("li");

  newLI.className = "list-item";
  newLI.innerText = "Novo input: ";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";

  newLI.appendChild(newInput)
  ul.appendChild(newLI)
  
}
