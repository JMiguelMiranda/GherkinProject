import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../../pages/loginPage')

Given('A user opens the login page', ()=>{
    cy.visit('customer/account/login/');
})

When('A user enters the username: {string}', (username) => {
    loginPage.typeUsername(username);
})

And('A user enters the password: {string}', (password) => {
    loginPage.typePassword(password);
})

And('A user clicks the login button', () => {
    loginPage.clickLoginButton();
})

Then('The user will be logged in', () => {
    loginPage.validateCustomerName();
})

Then('The user will receive the error message: {string}', (errorMessage) => {
    loginPage.validateErrorMessage(errorMessage);
})