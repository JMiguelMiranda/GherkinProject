class productPage{
    elements = {
        productTitle: () => cy.get('.title'),
        productRating: () => cy.get('.rating-container'),
        productDetails: () => cy.get('.product-details-container'),
        productPrice: () => cy.get('.main-price'),
        buyProductBtn: () => cy.get('#product-checkout-button'),
        addCaddToCartButtonBtn: () => cy.get('#product-addtocart-button'),
        cardsTypesPayments: () => cy.get('.price > .row > :nth-child(2)'),    
        successAddCartLabel: () => cy.get('.message-success > div'), 
        cartCounterLabel: () => cy.get('.counter-number'),
        addToCartButton: () => cy.get('#product-addtocart-button'),
        priceLabel: () => cy.get('.title')
        
    }

    clickAddToCartButton() {
        this.elements.addToCartButton().click();
    }

    validateCartCounterLabel(){
        this.elements.cartCounterLabel().should('be.visible');
    }

    clickBuyProductBtn(){
        this.elements.buyProductBtn().click({force:true});
    }

    clickAddToCartButton(){
        this.elements.addCaddToCartButtonBtn().click();
    }

    validateProductTitle(){
        this.elements.productTitle().should('be.visible');
    }

    validateProductRating(){
        this.elements.productRating().should('be.visible');
    }

    validateProductDetails(){
        this.elements.productDetails().should('be.visible');
    }

    validateProductPrice(){
        this.elements.productPrice().should('be.visible');
    }

    validatePaymentsTypes(){
        this.elements.cardsTypesPayments().should('be.visible');
    }

    validateSuccessAddCartLabel(){
        this.elements.successAddCartLabel().should('be.visible');
    }

    validateCartLabel(){
        this.elements.cartLabel().should('be.visible');
    }

    validateCartCounterLabel(){
        this.elements.cartCounterLabel().should('be.visible');
    }
}

module.exports = new productPage();