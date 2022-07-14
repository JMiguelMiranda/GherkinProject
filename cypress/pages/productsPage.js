class productsPage{
    elements = {
        addToCartButton: () => cy.get('#product-addtocart-button'),
        cartCounterLabel: () => cy.get('.counter-number'),
        priceLabel: () => cy.get('.title')
    }

    clickAddToCartButton() {
        this.elements.addToCartButton().click();
    }

    validateCartCounterLabel(){
        this.elements.cartCounterLabel().should('be.visible');
    }
}

module.exports = new productsPage();