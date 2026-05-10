class CartPage {
  constructor(page) {
    this.page = page;

    this.checkoutBtn = '#checkout';
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
    this.successMsg = '.complete-header';
  }

  async checkout() {
    await this.page.click(this.checkoutBtn);

    await this.page.fill(this.firstName, 'Test');
    await this.page.fill(this.lastName, 'User');
    await this.page.fill(this.postalCode, '46000');
    await this.page.click(this.continueBtn);
    await this.page.click(this.finishBtn);
    
  }
}

module.exports = CartPage;