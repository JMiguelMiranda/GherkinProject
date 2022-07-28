import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import carritoPage from "../../../pages/carritoPage";

const productPage = require('../../../pages/productPage');

Given('a user adds AMZ product {string} to the cart', (sku) => {
    cy.visit('product/amz/' + sku);
    productPage.clickBuyProductBtn();
})

Given('is in the cart page', () => {
    carritoPage.validateProductQuantity();
    carritoPage.obtainProductPrice();
})

Given('changes the quantity value', () => {
    carritoPage.typeQuantity(3);
})

Given('enters coupon code {string}', (coupon) => {
    carritoPage.clickCouponLabel();
    carritoPage.typeCouponCode(coupon);
})

When('clicks the \'Aplicar\' button', () => {
    carritoPage.clickApplyCoupon();
})

When('clicks the \'Actualizar carrito\' button', () => {
    carritoPage.clickUpdateCartButton();
})

When('clicks the \'Eliminar\' button', () => {
    carritoPage.clickDeleteProductButton();
})

Then('the quantity field should be different', () => {
    carritoPage.validateProductQuantity(3);
})

Then('the product price should be equivalent to the quantity of products', () => {
    carritoPage.checkProductPrice();
})

Then('the cart should be empty', () => {
    carritoPage.validateEmptyCart();
})

Then('coupon applied successfully message exist', () => {
    carritoPage.checkCouponSuccess();
})

Then('discount has been properly applied', () => {
    carritoPage.checkCouponPriceDiscount();
})