class loginPage{
    elements = {
        nameInput: () => cy.get('#firstname'),
        lastNameInput: () => cy.get('#lastname'),
        emailRegisterInput: () => cy.get('#email_address'),
        passworwdRegisterInput: () => cy.get('#password'),
        confirmPasswordRegisterInput: () => cy.get('#password-confirmation'),
        emailLoginInput: () => cy.get('.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .email > .control > #email'),
        passwordLoginInput: () => cy.get('.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'),
        loginButton: () => cy.get('.fieldset > .actions-toolbar > div.primary > #send2'),
        registerButton: () => cy.get('#form-validate > .actions-toolbar > div.primary > .primary'),
        loginWithGoogleButton: () => cy.get('.login-container > .sociallogin-wrapper > .block > .sociallogin-padding > .sociallogin-box > .sociallogin-button'),
        customerNameLabel: () => cy.get('.dropdown-button > span'),
        errorMessageLabel: () => cy.get('.message-error'),
        menuBtn: () => cy.get('.dropdown-button'),
        profileBtn: () => cy.get('[href="https://preprod.tiendamia.com.do/customer/account/"]'),
        miniBanner: () => cy.get(':nth-child(1) > .info-card')
    }

    typeName(name){
        this.elements.nameInput().type(name);
    }

    typeLastName(lastname){
        this.elements.lastNameInput().type(lastname);
    }

    typeRegisterEmail(){
        const email = Date.now() + 'test-automation@yopmail.com';
        this.elements.emailRegisterInput().type(email);
    }

    typeRegisterPassword(password){
        this.elements.passworwdRegisterInput().type(password);
    }

    typeRegisterPasswordConfirmation(password){
        this.elements.confirmPasswordRegisterInput().type(password);
    }
    
    typeLoginEmail(email){
        this.elements.emailLoginInput().type(email);
    }

    typeLoginPassword(password){
        this.elements.passwordLoginInput().type(password);
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }

    clickRegisterButton(){
        this.elements.registerButton().click();
    }

    clickLoginGoogleButton(){
        this.elements.loginWithGoogleButton().click();
    }

    validateErrorMessage(errorMessage){
        this.elements.errorMessageLabel().should('contain', errorMessage);
    }

    validateCustomerName(){
        this.elements.customerNameLabel().should('contain', 'test test');
    }

    validateCurrentPage(){
        this.elements.miniBanner().should('be.visible');
    }

    clickMenuButton(){
        this.elements.menuBtn().click();
    }
    clickProfileButton(){
        this.elements.profileBtn().click();
    }

}

module.exports = new loginPage();