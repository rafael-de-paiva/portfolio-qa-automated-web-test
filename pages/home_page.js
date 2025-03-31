const { I } = inject();

module.exports = {

  //----------------Element mappings:----------------

  button:{
    contact: 'a[href="/contact_us"]',
    delete: 'a[href="/delete_account"]',
    login: 'a[href="/login"]',
    product: 'a[href="/products"]'
  },

  sector:{
    carousel: 'div[class="col-sm-12"]'
  },

  //----------------Method funcions:-----------------

  deleteAccount(){
    I.click(this.button.delete)
  },

  gotoContact(){
    I.waitForElement(this.button.contact,5)
    I.click(this.button.contact)
  },

  gotoLogin(){
    I.waitForElement(this.button.login,5)
    I.click(this.button.login)
  },

  gotoProduct(){
    I.waitForElement(this.button.product)
    I.click(this.button.product)
  },

  validateHomePage(){
    I.waitForElement(this.sector.carousel,5)
    I.seeElement(this.sector.carousel)
    I.dontSeeElement(this.button.delete)
  },

  validateHomePageLogged(username) {
    I.waitForElement(this.sector.carousel,5)
    I.seeElement(this.sector.carousel)
    I.seeElement(this.button.delete)
    I.see(`Logged in as ${username}`)
  }

}
