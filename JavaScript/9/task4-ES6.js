function createProduct(id, name, price) {
  return {
    id,
    name,
    price,
    getSummary() {
      return `Product: ${this.name} costs $${this.price}`;
    }
  };
}

const myProduct = createProduct(101, "Wireless Mouse", 25);
console.log(myProduct.getSummary());