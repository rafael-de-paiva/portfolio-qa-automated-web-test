const { I } = inject();

module.exports = {

  //----------------Element mappings:----------------

  button: {
    continue: 'a[data-qa="continue-button"]'
  },

  text: {
    created:'ACCOUNT CREATED!',
    deleted: 'ACCOUNT DELETED!',
  },

  //----------------Method funcions:-----------------

  finishSignDel(){
    I.click(this.button.continue)
  },

  validateCreated(){
    I.waitForText(this.text.created,5)
    I.see(this.text.created)
  },

  validateDeleted(){
    I.waitForText(this.text.deleted,5)
    I.see(this.text.deleted)
  },

}
