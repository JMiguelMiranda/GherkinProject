import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

const carritoPage = require('../../../pages/carritoPage')
const productPage = require('../../../pages/productPage');
const amzUrl = '/product/amz/B000FZX93K';
const ebyUrl = '/product/ebay/v1%7C264724079628%7C564540908530';
const wrtUrl = '/product/wrt/633860434';
const mcyUrl = '/product/mcy/8570453';

Given('A user opens an Amazon product', ()=>{
    cy.visit(amzUrl).then(() => {
        cy.url(amzUrl).should('include', amzUrl);
        cy.wait(3000);
    });
})

Given('A user opens an eBay product', ()=>{
    cy.visit(ebyUrl).then(() => {
        cy.url(ebyUrl).should('include', ebyUrl);
        cy.wait(3000);
    });
})

Given('A user opens an Walmart product', ()=>{
    cy.visit(wrtUrl).then(() => {
        cy.url(wrtUrl).should('include', wrtUrl);
        cy.wait(3000);
    });
})

Given('A user opens an Macy\'s product', ()=>{
    cy.visit(mcyUrl).then(() => {
        cy.url(mcyUrl).should('include', mcyUrl);
        cy.wait(3000);
    });
})

When('A user validates product information', () => {
    productPage.validatePaymentsTypes();
    productPage.validateProductDetails();
    productPage.validateProductPrice();
    productPage.validateProductRating();
    productPage.validateProductTitle();
})

When('A user clicks the buy button', () => {
    productPage.clickBuyProductBtn();
})

When('A user clicks the add to cart button', () => {
    productPage.clickAddToCartButton();
    productPage.validateCartCounterLabel();
})

Then('The user will be on the cart page', () => {
   cy.url().should('include', '/checkout/cart/');
})

Then('The user will see success label message', () => {
    productPage.validateSuccessAddCartLabel();
})

Then('The user validates there are 2 products in the cart', () => {
    carritoPage.validateProductQuantity(2);
})

