class carritoPage{
    elements = {
        page: () => cy.get('.page'),
        deleteProductButton: () => cy.get('.button-icon-text_outlined_small'),
        emptyCartLabel: () => cy.get('.cart-empty-title'),
        cartButton: () => cy.get('.minicart-wrapper > .action'),
        headerCartDeleteButton: () => cy.get('.action > img'),
        confirmDeleteProductButton: () => cy.get('.action-primary'),
        itemQuantityInput: () => cy.get('[data-role="cart-item-qty"]'),
        productPriceLabel: () => cy.get('.sub > .amount > .price'),
        updateButton: () => cy.get('.update'),
        couponSuccessLabel: () => cy.get('.message-success'),
        enterCouponLabel: () => cy.get('#block-discount-heading'),
        enterCouponField: () => cy.get('#coupon_code'),
        applyCouponButton: () => cy.get('.fieldset > .actions-toolbar > div.primary > .action'),
        couponPriceDiscount: () => cy.get(':nth-child(2) > .amount > :nth-child(1) > .price')
    }

    checkCouponPriceDiscount() {
        this.elements.couponPriceDiscount().should('contain', '-U$S 10.00');
    }

    clickApplyCoupon() {
        this.elements.applyCouponButton().click();
    }

    clickCouponLabel() {
        this.elements.enterCouponLabel().click();
    }

    typeCouponCode(coupon){
        this.elements.enterCouponField().type(coupon);
    }

    checkCouponSuccess() {
        this.elements.couponSuccessLabel().should('contain', 'aplicado con éxito');
    }

    obtainProductPrice() {
        this.elements.productPriceLabel().invoke('text').as('productPrice');
    }

    typeQuantity(value){
        this.elements.itemQuantityInput().clear().type(value);
    }

    clickUpdateCartButton(){
        this.elements.updateButton().click();
    }

    checkProductPrice(){
        this.elements.productPriceLabel().should('be.visible');
        cy.get('.page-wrapper').then(function () {
            const price = this.productPrice.substring(3) * 3;
            cy.log('aaaaaaaaaaa', price);
            cy.get('.sub > .amount > .price').should('contain', parseInt(price));
        })
    }

    validateEmptyCart() {
        cy.visit('checkout/cart')
        this.clickDeleteProductButton();
        this.elements.emptyCartLabel().should('be.visible');
    }

    validateProductQuantity(number){
        cy.wait(1000);  
        if(number == undefined){number = 1;}
        this.elements.itemQuantityInput().invoke('attr', 'value').should('contain', number);
    }

    clickDeleteProductButton(){
        cy.get('.page-wrapper').then(page => {
            const productExist = page.find('.button-icon-text_outlined_small').length > 0;
            if(productExist){
                this.elements.deleteProductButton().click({multiple:true});
            }
        })
    }
}

module.exports = new carritoPage();