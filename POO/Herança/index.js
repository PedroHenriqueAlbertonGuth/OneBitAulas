class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 50000);
const someHouse = new House(250, 70000);

console.log(land);
console.log(someHouse.getPricePerSquareMeter());
console.log(someHouse instanceof Property);

class Apartment extends Property {
  constructor(number, area, price) {
    // chamamos dentro do construtor da classe filha, o da classe mãe, com a palavra super
    // equivalente a this.area = area e this.price = price
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const someApartment = new Apartment("202", 50, 47800);

console.log(someApartment);
console.log(someApartment.getFloor());
