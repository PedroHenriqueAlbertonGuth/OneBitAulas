"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return "A m\xE9dia simples de ".concat(numbers, " \xE9 ").concat((numbers.reduce(function (valorAcumulado, number) {
    return valorAcumulado + number;
  }, 0) / numbers.length).toFixed(2));
};
console.log(average(6, 8, 7, 9, 4, 10));
var weightedAverage = function weightedAverage(_ref, _ref2) {
  var _ref3 = _toArray(_ref),
    numbers = _ref3.slice(0);
  var _ref4 = _toArray(_ref2),
    weigth = _ref4.slice(0);
  return "A m\xE9dia ponderada dos valores ".concat(numbers, " com respectivos pesos ").concat(weigth, " \xE9 ").concat(numbers.reduce(function (valorAcumulado, num, i) {
    return valorAcumulado + num * weigth[i];
  }, 0) / weigth.reduce(function (valorAcumulado, num) {
    return valorAcumulado + num;
  }, 0));
};
console.log(weightedAverage([5, 7, 2], [2, 3, 1]));
var mediana = function mediana() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  numbers.sort(function (a, b) {
    return a - b;
  });
  var numbersClone = [].concat(numbers);
  if (numbers.length % 2 === 0) {
    var _mediana = numbersClone.splice(numbersClone.length / 2 - 1, 2);
    return "A mediana dos valores ".concat(numbers, " \xE9 ").concat(_mediana.reduce(function (accum, num) {
      return accum + num;
    }, 0) / 2);
  } else if (numbers.length % 2 === 1) {
    var _mediana2 = numbersClone.splice(numbersClone.length / 2, 1);
    return "A mediana dos valores ".concat(numbers, " \xE9 ").concat(_mediana2[0]);
  }
};
console.log(mediana(11, 7, 5, 2, 10, 3));
var fashion = function fashion() {
  var maior = null;
  var ocorrenciasMaior = -1;
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  for (var i = 0; i < numbers.length; i++) {
    var ocorrencia = 1;
    for (var t = i + 1; t < numbers.length; t++) {
      if (numbers[i] == numbers[t]) {
        ocorrencia++;
      }
    }
    if (ocorrencia > ocorrenciasMaior) {
      maior = numbers[i];
      ocorrenciasMaior = ocorrencia;
    }
  }
  return "A moda dos valores ".concat(numbers, " \xE9 ").concat(maior, ", que ocorreu ").concat(ocorrenciasMaior, " vezes");
};
console.log(fashion(1, 2, 1, 2, 3, 4, 5, 4, 5, 3, 4, 6));
