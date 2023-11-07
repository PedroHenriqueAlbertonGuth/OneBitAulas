const buttonDev = document.getElementById("newTecnologyButton");
const formDev = document.getElementById("devForm");
const infoDiv = document.getElementById("informationDiv");
const registerDev = document.getElementById("registerDev");
const devSubmitedInfo = [];

formDev.addEventListener("submit", function (ev) {
  ev.preventDefault();
});
document.getElementById("fullName").addEventListener("input", function () {
  let addButton = document.getElementById("newTecnologyButton");
  addButton.disabled = this.value.length >= 3 ? false : true;
});
buttonDev.addEventListener("click", function () {
  const devFullName = document.getElementById("fullName").value;
  const tecnologyTextField = document.createElement("input");
  tecnologyTextField.type = "textArea";
  tecnologyTextField.id = devFullName + "tecnology";
  tecnologyTextField.placeholder = "Tecnologia";
  const radioButton = document.createElement("radio");
  radioButton.innerHTML =
    "<input type = 'radio' name ='expTime' value = '0-2 anos' id='02anos'></input>" +
    "<label for = '02anos'> 0-2 anos </label>" +
    "<input type = 'radio' name ='expTime' value = '3-4 anos' id='34anos'></input>" +
    "<label for = '34anos'> 3-4 anos </label>" +
    "<input type = 'radio' name ='expTime' value = '5+ anos' id='5+anos'></input>" +
    "<label for = '5+anos'> 5+ anos </label>";
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remover linha";
  removeButton.addEventListener("click", function () {
    infoDiv.removeChild(tecnologyTextField);
    infoDiv.removeChild(radioButton);
    infoDiv.removeChild(removeButton);
  });
  infoDiv.append(tecnologyTextField, radioButton, removeButton);
});

registerDev.addEventListener("click", function () {
  const devFullName = document.getElementById("fullName").value;
  const devRegistered = {
    fullName: devFullName,
    tecnology: document.getElementById(devFullName + "tecnology").value,
    expTime: document.querySelector("input[name= 'expTime']:checked").value,
  };
  devSubmitedInfo.push(devRegistered);
  const devNameLi = document.createElement("li");
  const devTecnologyLi = document.createElement("li");
  const devExpTimeLi = document.createElement("li");
  devNameLi.innerText = devSubmitedInfo[0].fullName;
  devTecnologyLi.innerText = devSubmitedInfo[0].tecnology;
  devExpTimeLi.innerText = devSubmitedInfo[0].expTime;
  document
    .getElementById("devSubmited")
    .append(devNameLi, devTecnologyLi, devExpTimeLi);
  console.log(devRegistered);
  console.log(devSubmitedInfo);
});
