const listaDeCompras = ["Açúcar", false]
console.log(listaDeCompras)

listaDeCompras[0] = "Sabonete"
listaDeCompras[1] = "Macarrão"
listaDeCompras[2] = 2
listaDeCompras[5] = "Cebola"
listaDeCompras[3] = {nome: "Arroz",
                        quantidade: 2, }


console.log(listaDeCompras)

console.log(listaDeCompras[3].nome)