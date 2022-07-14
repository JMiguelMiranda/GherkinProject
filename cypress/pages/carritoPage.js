class carritoPage{
    elements = {
        page: () => cy.get('.page'),
        deleteProductButton: () => cy.get('.button-icon-text_outlined_small'),
        emptyCartLabel: () => cy.get('.cart-empty-title')
    }

    validateEmptyCartLabel(){
        this.elements.emptyCartLabel().should('be.visible');
    }

    clickDeleteProductButton(){
        cy.get('.page').then(page => {
            const productExist = page.find('.button-icon-text_outlined_small').length > 0;
            if(productExist){
                this.elements.deleteProductButton().click();
            }
        })
    }
}

module.exports = new carritoPage();