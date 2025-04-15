/// <reference types="cypress" />

export default {
    button: {
        confirm: 'button[id="button-review"]',
        search: 'button[class="btn btn-default btn-lg"]',
        view: 'a[href="/product_details/13"]'
    },
    
    field: {
        email: 'input[id="email"]',
        name: 'input[id="name"]',
        product: 'input[id="search_product"]',
        review: 'textarea[id="review"]'
    },
    
    text: {
        all: 'All Products',
    },

    validateProductPage() {
        cy.contains(this.text.all).should('be.visible');
    },

    startSearch() {
        cy.get(this.field.product).type('Frozen');
        cy.get(this.button.search).click();
    },

    confirmSearch() {
        cy.get(this.button.view).click();
    },

    confirmProduct() {
        cy.get(this.field.name).should('be.visible');
    },

    startReview(firstName, lastName, email) {
        cy.get(this.field.name).type(`${firstName} ${lastName}`);
        cy.get(this.field.email).type(email);
        cy.get(this.field.review).type('This is a test review.');
        cy.get(this.button.confirm).click();
    },

    confirmReview(text) {
        cy.contains(text).should('be.visible');
    }
}