/// <reference types="cypress" />

export default {
    button: {
        exit: 'a[class="btn btn-success"]',
        send: 'input[data-qa="submit-button"]',
    },
    
    field: {
        email: 'input[data-qa="email"]',
        name: 'input[data-qa="name"]',
        subject: 'input[data-qa="subject"]',
        textarea: 'textarea[data-qa="message"]'
    },
      
    input: {
        file: 'input[name="upload_file"]'
    },
    
    text: {
        touch: 'Get In Touch'
    },

    validateContactPage() {
        cy.contains(this.text.touch).should('be.visible');
        cy.get(this.button.exit).should('not.exist');
    },

    fillContactForm(fistName, lastName, email) {
        cy.get(this.field.name).type(`${fistName} ${lastName}`);
        cy.get(this.field.email).type(email);
        cy.get(this.field.subject).type('This is a test');
        cy.get(this.field.textarea).type('This is my text field which i am going to insert here.');
        cy.get(this.input.file).attachFile('file_sample.txt');
    },

    finishContactForm() {
        cy.get(this.button.send).click();
    },

    validateSent(text) {
        cy.contains(text).should('be.visible');
    },

    exitContactPage() {
        cy.get(this.button.exit).click();
    }
}