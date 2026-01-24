module.exports = class Product {
  constructor(name, description, price, inStock = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  removeFromStock(quantity) {
    if (quantity > this.inStock) {
      console.log(
        `Cannot remove ${quantity} items from stock. Only ${this.inStock} available.`,
      );
      return;
    } else {
      this.inStock -= quantity;
    }
  }
};
