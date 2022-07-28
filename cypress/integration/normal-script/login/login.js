import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../../pages/loginPage')

Given('A user opens the login page', () => {
    cy.visit('customer/account/login/');
})

Given('A user opens the register page', () => {
    cy.visit('customer/account/create/?');
})

When('A user enters the name: {string}', (name) => {
    loginPage.typeName(name);
})

When('A user enters the lastname: {string}', (lastname) => {
    loginPage.typeLastName(lastname)
})

When('A user enters the dynamic register email', () => {
    loginPage.typeRegisterEmail();
})

When('A user enters the register password: {string}', (password) => {
    loginPage.typeRegisterPassword(password);
})

When('A user enters the register password confirmation: {string}', (password) => {
    loginPage.typeRegisterPasswordConfirmation(password);
})

When('A user enters the login email: {string}', (email) => {
    loginPage.typeLoginEmail(email);
})

When('A user enters the login password: {string}', (password) => {
    loginPage.typeLoginPassword(password);
})

When('A user clicks the login button', () => {
    loginPage.clickLoginButton();
})

When('The user clicks the register button', () => {
    loginPage.clickRegisterButton();
})

Then('The user will be logged in', () => {
    loginPage.clickMenuButton();
    loginPage.clickProfileButton();
    cy.url().should('include', '/customer/account');
    loginPage.validateCustomerName();
})

Then('The user will receive the error message: {string}', (errorMessage) => {
    loginPage.validateErrorMessage(errorMessage);
})