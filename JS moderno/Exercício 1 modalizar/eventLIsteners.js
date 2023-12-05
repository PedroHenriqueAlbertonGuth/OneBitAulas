import {
  charKey,
  clear,
  copyToClipboard,
  keyDown,
  themeSwitcher,
} from "./eventListenerFunctions.js";
import { input } from "./consts.js";
import calculate from "./eventListenerFunctions.js";
function addEventListener() {
  document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value;
      input.value += value;
    });
  });
  document.getElementById("clear").addEventListener("click", clear);
  input.addEventListener("keydown", keyDown);
  document.getElementById("equal").addEventListener("click", calculate);
  document
    .getElementById("themeSwitcher")
    .addEventListener("click", themeSwitcher);
  document
    .getElementById("copyToClipboard")
    .addEventListener("click", copyToClipboard);
}
// const charKeyListener = document
//   .querySelectorAll(".charKey")
//   .forEach(charKey());
// const clearListener = document
//   .getElementById("clear")
//   .addEventListener("click", clear);
// const keyDownListener = input.addEventListener("keydown", keyDown);
// const equalListener = document
//   .getElementById("equal")
//   .addEventListener("click", calculate);
// const themeSwitcherListener = document
//   .getElementById("themeSwitcher")
//   .addEventListener("click", themeSwitcher);
// const copyToClipboardListener = document
//   .getElementById("copyToClipboard")
//   .addEventListener("click", copyToClipboard);

export { addEventListener };
