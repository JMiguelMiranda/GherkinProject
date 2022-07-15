import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import carritoPage from "../../../pages/carritoPage";
const productPage = require('../../../pages/productPage')

Given('A user opens an Amazon product', ()=>{
    cy.visit('/product/amz/B000FZX93K');
})

Given('A user opens an eBay product', ()=>{
    cy.visit('/product/ebay/v1%7C264724079628%7C564540908530');
})

Given('A user opens an Walmart product', ()=>{
    cy.visit('/product/wrt/633860434');
})

Given('A user opens an Macy\'s product', ()=>{
    cy.visit('/product/mcy/8570453');
})

When('A user validates product information', () => {
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
   cy.url().should('include', '/checkout/cart/');
})

Then('The user will see success label message', () => {
    productPage.validateSuccessAddCartLabel();
})

Then('The user validates there are 2 products in the cart', () => {
    carritoPage.validateProductQuantity(2);
})

And('A user clicks the add to cart button', () => {
    productPage.clickAddToCartButton();
})