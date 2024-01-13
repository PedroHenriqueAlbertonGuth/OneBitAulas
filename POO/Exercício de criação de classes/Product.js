class Product {
  constructor(name, description, price) {
    (this.name = name),
      (this.description = description),
      (this.price = price),
      (this.inStock = 0);
  }
  addToStock(quantify) {
    this.inStock += quantify;
  }
  calculateDiscount(percentage) {
    let newPrice = this.price - (percentage / 100) * this.price;
    let discount = this.price * (percentage / 100);
    return console.log(
      `O produto com ${percentage}% de desconto fica no preço de ${newPrice} com o desconto de ${discount}`
    );
  }
}

const mouse = new Product("Mouse", "Sem fio", 400);

mouse.addToStock(1);
mouse.calculateDiscount(10);

console.log(mouse);
