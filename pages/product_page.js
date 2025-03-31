const { I } = inject();

module.exports = {

  //----------------Element mappings:----------------

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
    all: 'ALL PRODUCTS',
    done: 'Thank you for your review.'
  },

  //----------------Method funcions:-----------------

  validateProductPage(){
    I.waitForText(this.text.all, 5)
    I.see(this.text.all)
  },
  
  startSearch(){
    I.fillField(this.field.product, 'Frozen')
    I.click(this.button.search)
  },

  confirmSearch(){
    I.seeElement(this.button.view)
    I.click(this.button.view)
  },

  confirmProduct(){
    I.waitForElement(this.field.name, 5)
    I.seeElement(this.field.name)
  },

  startReview(firstName, lastName, email){
    I.fillField(this.field.name, `${firstName} ${lastName}`)
    I.fillField(this.field.email, email)
    I.fillField(this.field.review, 'This is a review')
    I.click(this.button.confirm)
  },

  confirmReview(){
    I.waitForText(this.text.done, 3)
    I.see(this.text.done)
  }

}
