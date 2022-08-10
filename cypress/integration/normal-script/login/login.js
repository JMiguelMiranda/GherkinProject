import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../../pages/loginPage')

Given('A user opens the login page', () => {
    cy.visit('customer/account/login/');
})

Given('A user opens the register page', () => {
    cy.visit('customer/account/create/?');
})

Given('A user enters the name: {string}', (name) => {
    loginPage.typeName(name);
})

Given('A user enters the lastname: {string}', (lastname) => {
    loginPage.typeLastName(lastname)
})

Given('A user enters the dynamic register email', () => {
    loginPage.typeRegisterEmail();
})

Given('A user enters the register password: {string}', (password) => {
    loginPage.typeRegisterPassword(password);
})

Given('A user enters the register password confirmation: {string}', (password) => {
    loginPage.typeRegisterPasswordConfirmation(password);
})

Given('A user enters the login email: {string}', (email) => {
    loginPage.typeLoginEmail(email);
})

Given('A user enters the login password: {string}', (password) => {
    loginPage.typeLoginPassword(password);
})

When('A user clicks the login button', () => {
    loginPage.clickLoginButton();
})

When('The user clicks the register button', () => {
    loginPage.clickRegisterButton();
})

Then('The user will be logged in', () => {
    loginPage.validateCustomerName();
})

Then('Will be on the home page', () => {
    loginPage.validateCurrentPage();
})

Then('The user will receive the error message: {string} at the login page', (errorMessage) => {
    cy.url().should('include', '/customer/account/login');
    loginPage.validateErrorMessage(errorMessage);
})