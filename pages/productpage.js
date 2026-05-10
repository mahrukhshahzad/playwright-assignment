class ProductPage {
  constructor(page) {
    this.page = page;

    this.addToCartBtn = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
  }

  async addProduct() {
    await this.page.click(this.addToCartBtn);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = ProductPage;