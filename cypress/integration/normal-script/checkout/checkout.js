import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../../pages/loginPage');
const productPage = require('../../../pages/productPage');
const checkoutPage = require('../../../pages/checkoutPage');

Given('a user adds AMZ product {string} to the cart', (sku) => {
    cy.visit('product/amz/' + sku);
    productPage.clickAddToCartButton();
    productPage.validateSuccessAddCartLabel();
})

Given('the user tries to go to the checkout but makes the login first', () => {
    cy.visit('/checkout/#shipping');
    loginPage.typeLoginEmail('test@yopmail.com');
    loginPage.typeLoginPassword('Aa123123');
    loginPage.clickLoginButton();
    loginPage.clickMenuButton();
    loginPage.clickProfileButton();
    cy.url().should('include', '/customer/account');
    loginPage.validateCustomerName();
})

Given('now the user is redirected to checkout', () => {
    cy.visit('/checkout/#shipping');
    checkoutPage.validateCheckoutTitle();
    checkoutPage.savedAdressVerification();
})

Given('the user fills the shipping adress data', () => {
    checkoutPage.typeIdentificationNumber();
    checkoutPage.typeAdress();
    checkoutPage.selectProvince();
    checkoutPage.typeCity();
    checkoutPage.typeZipCode();
    checkoutPage.typeCellphone();
    checkoutPage.typeBirthday();
    checkoutPage.saveAdressButton();
    checkoutPage.clickContinueToPaymentButton();
})

When('clicks the buy button', () => {
    checkoutPage.clickMakePaymentButton();
})

Then('the order was successfully made', () => {
    checkoutPage.validateSuccessPurchase();
})