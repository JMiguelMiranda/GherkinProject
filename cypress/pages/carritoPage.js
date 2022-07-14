class carritoPage{
    elements = {
        page: () => cy.get('.page'),
        deleteProductButton: () => cy.get('.button-icon-text_outlined_small'),
        emptyCartLabel: () => cy.get('.cart-empty-title'),
        cartButton: () => cy.get('.minicart-wrapper > .action'),
        headerCartDeleteButton: () => cy.get('.action > img'),
        confirmDeleteProductButton: () => cy.get('.action-primary')
    }

    clickCartButton() {
        cy.visit('checkout/cart')
        this.clickDeleteProductButton();
        this.validateEmptyCartLabel();

        // cy.get('.page-wrapper').then(page => {
        //     const emptyCart = page.find('.subtitle').length == 1;
        //     if(!emptyCart){
        //         this.elements.headerCartDeleteButton().click();
        //         this.elements.confirmDeleteProductButton().click();
        //     }
        // })
    }

    validateEmptyCartLabel(){
        this.elements.emptyCartLabel().should('be.visible');
    }

    clickDeleteProductButton(){
        cy.get('.page-wrapper').then(page => {
            const productExist = page.find('.button-icon-text_outlined_small').length > 0;
            if(productExist){
                this.elements.deleteProductButton().click();
            }
        })
    }
}

module.exports = new carritoPage();