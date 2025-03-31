const { button } = require("./home_page");

const { I } = inject();

module.exports = {

  //----------------Element mappings:----------------

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
    sent: 'Success! Your details have been submitted successfully.',
    touch: 'GET IN TOUCH'
  },

  //----------------Method funcions:-----------------

  exitContact(){
    I.click(this.button.exit)
  },

  fillContactFiels(firstName, lastName, email){
    I.fillField(this.field.name, `${firstName} ${lastName}`)
    I.fillField(this.field.email, email)
    I.fillField(this.field.subject, 'This is a test')
    I.fillField(this.field.textarea, 'This is my text field which i am going to insert here.')
    I.attachFile(this.input.file, 'file_sample.txt')
  },

  finishContact(){
    I.click(this.button.send)
  },
  
  validateContactPage(){
    I.waitForText(this.text.touch, 5)
    I.see(this.text.touch)
    I.dontSeeElement(this.button.exit)
  },

  validateSent(){
    I.waitForText(this.text.sent,5)
    I.see(this.text.sent)
    I.seeElement(this.button.exit)
  }

}
