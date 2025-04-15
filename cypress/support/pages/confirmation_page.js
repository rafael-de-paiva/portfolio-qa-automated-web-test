/// <reference types="cypress" />

export default {
    button: {
        continue: 'a[data-qa="continue-button"]'
    },
    
    validateConfirmationPage(text) {
        cy.contains(text).should('be.visible');
    },

    finishConfirmation() {
        cy.get(this.button.continue).click();
    }
}