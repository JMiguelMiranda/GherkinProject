import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../../pages/loginPage');
const carritoPage = require('../../../pages/carritoPage');
const productsPage = require('../../../pages/productsPage');
const checkoutPage = require('../../../pages/checkoutPage');

Given('a user does the login and verifies it has an empty cart', () => {
    cy.visit('customer/account/login/');
    loginPage.typeUsername('test@yopmail.com');
    loginPage.typePassword('Aa123123');
    loginPage.clickLoginButton();
    cy.url().should('include', '/customer/account');
    loginPage.validateCustomerName();

    cy.visit('checkout/cart');
    carritoPage.clickDeleteProductButton();
    carritoPage.validateEmptyCartLabel();
})

Given('the user adds AMZ product {string} to the cart', (sku) => {
    cy.visit('product/amz/' + sku);
    productsPage.clickAddToCartButton();
    productsPage.validateCartCounterLabel();
})

And('the user goes to checkout', () => {
    cy.visit('/checkout/#shipping');
})

When('the user fills the shipping adress data', () => {

})