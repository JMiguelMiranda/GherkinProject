class homeSaucePage{

    elements = {
        usernameInput: () =>  cy.get('#user-name'),
        passwordInput: () =>  cy.get('#password'),
        loginBtn: () =>   cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]'),
        registrarseBtn: () => cy.get('a.mx-2')
    }
    
    typeUsername(username){
        this.elements.usernameInput().type(username);
    }
    
    typeLoginPassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

    clicksignUp(){
        this.elements.registrarseBtn().click();
    }
}

module.exports = new homeSaucePage();