class checkoutPage{
    elements = {
        identificationNumberInput: () => cy.get('[name="custom_attributes\[document\]"]'),
        birthdayInput: () => cy.get('[name="custom_attributes\[birthdate\]"]'),
        adressInput: () => cy.get('[name="street\[0\]"]'),
        provinceSelect: () => cy.get('[name="region_id"]'),
        cityInput: () => cy.get('[name="city"]'),
        zipCodeInput: () => cy.get('[name="postcode"]'),
        cellphoneInput: () => cy.get('[name="telephone"]'),
        saveAdressButton: () => cy.get('.page-actions-buttons > .button-text_contained'),
        addNewAdressButton: () => cy.get('[data-bind="click: showFormPopUp, visible: !isNewAddressAdded()"] > span'),
        checkoutTitleLabel: () => cy.get('.shipping-address-main-title'),
        continueToPaymentButton: () => cy.get('div.primary > .button-text_contained'),
        makePaymentButton: () => cy.get(':nth-child(4) > div.primary > .action'),
        successPaymentLabel: () => cy.get('.font-700')
    }

    validateCheckoutTitle() {
        this.elements.checkoutTitleLabel().should('be.visible');
    }

    savedAdressVerification() {
        cy.get('.page-wrapper').then(page => {
            const savedAdress = page.find('#checkout-step-shipping > :nth-child(1) > .control > .shipping-address-items > .shipping-address-item');
            if(savedAdress){
                this.elements.addNewAdressButton().click();
            }
        })
    }

    validateSuccessPurchase() {
        this.elements.successPaymentLabel().should('be.visible');
    }

    clickContinueToPaymentButton() {
        this.elements.continueToPaymentButton().click();
    }

    clickMakePaymentButton() {
        this.elements.makePaymentButton().click();
    }

    typeIdentificationNumber() {
        this.elements.identificationNumberInput().type('324-2345643-12');
    }

    typeBirthday() {
        this.elements.birthdayInput().type('12/07/1987');
    }

    typeAdress() {
        this.elements.adressInput().type('Capitan del espacio');
    }

    selectProvince() {
        this.elements.provinceSelect().select(3);
    }

    typeCity() {
        this.elements.cityInput().type('Jorgito');
    }

    typeZipCode() {
        this.elements.zipCodeInput().type('1425');
    }

    typeCellphone(sting) {
        this.elements.cellphoneInput().type('+1 (809) 548 3494');
    }

    saveAdressButton() {
        this.elements.saveAdressButton().click();
    }
}

module.exports = new checkoutPage();