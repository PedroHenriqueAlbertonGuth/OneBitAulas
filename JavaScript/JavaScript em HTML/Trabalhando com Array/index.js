const arr = ["Frodo", "Sam","Merry",  "Pippin", "Gandalf"]
console.log(arr)

// Adicionar Elementos
// push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift
tamanho = arr.unshift("Sauron")
console.log(arr)
console.log(tamanho)

// Remover elementos
// pop
const lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

// shift
lastElement = arr.shift()
console.log(arr)
console.log(lastElement)

// Pesquisar por um element
// includes
const includes = arr.includes("Gandalf")
console.log(includes)

// indexOf
const index = arr.indexOf("Gandalf")
console.log(index)

// Cortar e concatenar
// slice
const hobbits = arr.slice(0, 4)
const others = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(others)

