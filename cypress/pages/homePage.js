class homePage{

    elements = {
        usernameInput: () =>  cy.get('#user-name'),
        passwordInput: () =>  cy.get('#password'),
        loginBtn: () =>   cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]'),
        registrarseBtn: () => cy.get('a.mx-2')
    }
}

module.exports = new homePage();