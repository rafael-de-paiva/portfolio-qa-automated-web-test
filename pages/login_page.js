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
    fail: 'Your email or password is incorrect!',
    register: 'New User Signup!'
  },
  
  //----------------Method funcions:-----------------
  
  confirmFail(){
    I.waitForText(this.text.fail, 5)
    I.see(this.text.fail)
  },

  finishRegistering(){
    I.click(this.button.confirmRegister)
  },

  startLogin(email, password){
    I.fillField(this.field.loginEmail, email)
    I.fillField(this.field.loginPassword, password)
    I.click(this.button.confirmLogin)
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
