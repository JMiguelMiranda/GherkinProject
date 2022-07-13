class loginPage{
    elements = {
        usernameInput: () => cy.get('.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .email > .control > #email'),
        passwordInput: () => cy.get('.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'),
        loginButton: () => cy.get('.fieldset > .actions-toolbar > div.primary > #send2'),
        loginWithGoogleButton: () => cy.get('.login-container > .sociallogin-wrapper > .block > .sociallogin-padding > .sociallogin-box > .sociallogin-button'),
        customerNameLabel: () => cy.get('.dropdown-button > span'),
        errorMessageLabel: () => cy.get('.message-error')
    }
    
    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }

    clickLoginGoogleButton(){
        this.elements.loginWithGoogleButton().click();
    }

    validateErrorMessage(errorMessage){
        this.elements.errorMessageLabel().should('contain', errorMessage);
    }

    validateCustomerName(){
        this.elements.customerNameLabel().should('contain', 'test test')
    }
}

module.exports = new loginPage();