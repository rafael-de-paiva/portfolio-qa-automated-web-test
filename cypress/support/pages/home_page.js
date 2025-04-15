/// <reference types="cypress" />

export default {
    button: {
        contact: 'a[href="/contact_us"]',
        delete: 'a[href="/delete_account"]',
        login: 'a[href="/login"]',
        product: 'a[href="/products"]'
    },

    sector:{
        carousel: 'div[class="col-sm-12"]'
      },

    validateHomePage() {
        cy.get(this.sector.carousel).should('be.visible');
        cy.get(this.button.delete).should('not.exist'); 
    },

    gotoLoginPage() {  
        cy.get(this.button.login).click();
    },

    validateHomePageLoggedIn() {
        cy.get(this.sector.carousel).should('be.visible');
        cy.get(this.button.delete).should('be.visible'); 
    },

    deleteAccount() {
        cy.get(this.button.delete).click();
    },

    gotoContactPage() {
        cy.get(this.button.contact).click();
    },

    gotoProductPage() {
        cy.get(this.button.product).click();
    },

    startLogin(email, password) {
        cy.get(this.field.loginUsername).type(email);
        cy.get(this.field.loginPassword).type(password);
        cy.get(this.button.confirmLogin).click();
    }
}