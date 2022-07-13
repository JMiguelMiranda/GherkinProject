import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { typeUsername } from "../../../pages/homeTiendamiaPage";
const homeSaucePage = require('../../../pages/homeTiendamiaPage')

Given('A user opens the login page', ()=>{
    cy.visit('/')
})

When('A user enter the username {string}', (username)=>{
    //homeSaucePage.typeUsername(username)
    homeSaucePage.clicksignUp()
})

And('A user enter the password {string}', (password)=>{
    homeSaucePage.typePassword(password)
})

And('A user clicks the login button', ()=>{
    homeSaucePage.clickLogin()
})

And('A user clicks the login button', ()=>{
    cy.get('#login-button').click()
})

Then('A user will be logged in', ()=>{
    cy.url().should('contains', '/inventory.html')
})

Then('A user will be receiving a failed message', ()=>{
    homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
})
