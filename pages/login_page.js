const { I } = inject();

module.exports = {

  //----------------Element mappings:----------------

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
    register: 'New User Signup!'
  },
  
  //----------------Method funcions:-----------------
  
  finishRegistering(){
    I.click(this.button.confirmRegister)
  },

  startRegistering(username, email){
    I.fillField(this.field.registerName,username)
    I.fillField(this.field.registerEmail, email)
  },

  validateLoginPage(){
    I.waitForText(this.text.enter, 5)
    I.see(this.text.enter)
    I.waitForText(this.text.register, 5)
    I.see(this.text.register)
  }

}
