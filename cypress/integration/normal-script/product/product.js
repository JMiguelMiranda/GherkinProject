import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

const carritoPage = require('../../../pages/carritoPage')
const productPage = require('../../../pages/productPage');
const amzUrl = '/product/amz/B000FZX93K';
const ebyUrl = '/product/ebay/v1%7C264724079628%7C564540908530';
const wrtUrl = '/product/wrt/633860434';
const mcyUrl = '/product/mcy/8570453';

When('A user opens an Amazon product', ()=>{
    cy.visit(amzUrl);
    cy.wait(4000);
})

When('A user opens an eBay product', ()=>{
    cy.visit(ebyUrl);
    cy.wait(4000);
})

When('A user opens an Walmart product', ()=>{
    cy.visit(wrtUrl);
    cy.wait(4000);
})

When('A user opens an Macy\'s product', ()=>{
    cy.visit(mcyUrl);
    cy.wait(4000);
})

Then('A user validates payment types', () => {
    productPage.validatePaymentsTypes();
})

Then('A user validates product details', () => {
    productPage.validateProductDetails();
})

Then('A user validates product price', () => {
    productPage.validateProductPrice();
})

Then('A user validates product rating', () => {
    productPage.validateProductRating();
})

Then('A user validates product title', () => {
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

