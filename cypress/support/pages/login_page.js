/// <reference types="cypress" />

export default {
  button: {
    confirmLogin: 'button[data-qa="login-button"]',
    confirmRegister: 'button[data-qa="signup-button"]'    
  },
    
  field: {
    loginEmail: 'input[data-qa="login-email"]',  
    loginPassword: 'input[data-qa="login-password"]', 
    registerEmail: 'input[data-qa="signup-email"]',
    registerName: 'input[data-qa="signup-name"]'
  },
    
  text:{
    enter: 'Login to your account',
    fail: 'Your email or password is incorrect!',
    register: 'New User Signup!'
  },

  validateLoginPage() {
    cy.contains(this.text.enter).should('be.visible');
    cy.contains(this.text.register).should('be.visible');
  },

  startRegistering(username, email) {
    cy.get(this.field.registerName).type(username);
    cy.get(this.field.registerEmail).type(email);
  },

  finishRegistering() {
    cy.get(this.button.confirmRegister).click();
  },

  startLogin(email, password) {
    cy.get(this.field.loginEmail).type(email);
    cy.get(this.field.loginPassword).type(password);
    cy.get(this.button.confirmLogin).click();
  },
  confirmLoginFail() {
    cy.contains(this.text.fail).should('be.visible');
  }
}