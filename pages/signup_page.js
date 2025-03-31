const { I } = inject();

module.exports = {

  //----------------Element mappings:----------------
  
  button: {
    signup: 'button[data-qa="create-account"]'
  },

  element: {
    txt: 'h2[class="title text-center"]'
  },

  input:{
    genderMale: 'input[id="id_gender1"]',
    genderFemale: 'input[id="id_gender2"]',
    newsletter: 'input[id="newsletter"]',
    offers: 'input[id="optin"]'
  },

  field:{
    insertPassword: 'input[data-qa="password"]',
    insertFirstName: 'input[data-qa="first_name"]',
    insertLastName: 'input[data-qa="last_name"]',
    insertCompany: 'input[data-qa="company"]',
    insertAddress1: 'input[data-qa="address"]',
    insertAddress2: 'input[data-qa="address2"]',
    insertState: 'input[data-qa="state"]',
    insertCity: 'input[data-qa="city"]',
    insertZip: 'input[data-qa="zipcode"]',
    insertNumber: 'input[data-qa="mobile_number"]'
  },

  selector: {
    selectDay: 'select[data-qa="days"]',
    selectMonth: 'select[data-qa="months"]',
    selectYear: 'select[data-qa="years"]',
    selectCountry: 'select[data-qa="country"]'
  },

  text:{
    asking: 'ENTER ACCOUNT INFORMATION'
  },

  //----------------Method funcions:-----------------

  finishSignup(){
    I.click(this.button.signup)
  },

  startSignup(gender, password, day, month, year, firstName, lastName, company, address1, address2, country, state, city, zip, number){
    if (gender == 'male') {
      I.click(this.input.genderMale)
    } else {
      I.click(this.input.genderFemale)
    }
    I.fillField(this.field.insertPassword, password)
    I.selectOption(this.selector.selectDay, day)
    I.selectOption(this.selector.selectMonth, month)
    I.selectOption(this.selector.selectYear, year)
    I.click(this.input.newsletter)
    I.click(this.input.offers)
    I.fillField(this.field.insertFirstName, firstName)
    I.fillField(this.field.insertLastName, lastName)
    I.fillField(this.field.insertCompany, company)
    I.fillField(this.field.insertAddress1, address1)
    I.fillField(this.field.insertAddress2, address2)
    I.selectOption(this.selector.selectCountry, country)
    I.fillField(this.field.insertState, state)
    I.fillField(this.field.insertCity, city)
    I.fillField(this.field.insertZip, zip)
    I.fillField(this.field.insertNumber, number)
  },

  validateSignup(){
    I.waitForText(this.text.asking, 5)
    I.see(this.text.asking)
  }

}
