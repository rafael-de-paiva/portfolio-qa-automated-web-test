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
    registerName: 'input[data-qa="signup-name"]', 
    registerEmail: 'input[data-qa="signup-email"]'
  },

  text:{
    register: 'New User Signup!',
    enter: 'Login to your account'
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
