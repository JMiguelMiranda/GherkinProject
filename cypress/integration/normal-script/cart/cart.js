import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
const productPage = require('../../../pages/productPage')

Given('A user opens the the product page with AMZ', ()=>{
    cy.visit('/product/amz/B000FZX93K');
})

Given('A user opens the the product page with Ebay', ()=>{
    cy.visit('/product/ebay/v1%7C225073009420%7C0');
})

Given('A user opens the the product page with WRT', ()=>{
    cy.visit('/product/wrt/33315081');
})

When('A user validates all information', () => {
    productPage.validatePaymentsTypes();
    productPage.validateProductDetails();
    productPage.validateProductPrice();
    productPage.validateProductRating();
    productPage.validateProductTitle();
})

And('A user clicks the buy button', () => {
    productPage.clickBuyProductBtn();
})

Then('The user will be on the cart page', () => {
   cy.wait(2000);
   cy.url().should('include', '/checkout/cart/');
})

Then('The user will see success label message', () => {
    productPage.validateSuccessAddCartLabel();
})

And('A user clicks the add product button', () => {
    productPage.clickAddProductCard();
})