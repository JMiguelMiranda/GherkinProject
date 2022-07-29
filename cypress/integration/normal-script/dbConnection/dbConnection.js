import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('the user try to connect to the Database', () => {
    cy.task('queryDb',"SELECT * FROM cms_page").then((result) => {
        var rec = result
        console.log(rec);
    });
});