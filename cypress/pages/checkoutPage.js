class checkoutPage{
    elements = {
        identificationNumberInput: () => cy.get(''),
        birthdayInput: () => cy.get(''),
        adressInput: () => cy.get(''),
        provinceSelect: () => cy.get(''),
        cityInput: () => cy.get(''),
        zipCodeInput: () => cy.get(''),
        cellphoneInput: () => cy.get(''),
        continueToPaymentButton: () => cy.get('')
    }
}

module.exports = new checkoutPage();