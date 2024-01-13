// a palavra reservada class é usada pra criar uma classe, seguido do nome da classe e as {}
class Book {
  // essa palavra reservada é usada para passar os parâmetros para instanciar o objeto
  constructor(title) {
    this.title = title;
    this.published = false;
  }
  // criar o método fora do construtor faz que toda instância receba esse método
  publish() {
    this.published = true;
  }
}

const eragon = new Book("Eragon");
const eldest = new Book("Eldest");

eragon.publish()

console.log(eragon);
console.log(eldest);

// o instanceof é um operador que funciona nesse formato (instancia instanceof classe)
// e serve para verificar se a instância é daquela classe
console.log(eragon instanceof Book)