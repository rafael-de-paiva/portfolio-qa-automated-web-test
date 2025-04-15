/// <reference types="cypress" />

export default {
    button: {
        signup: 'button[data-qa="create-account"]'
    },
    
    element: {
        txt: 'h2[class="title text-center"]'
    },
    
    checkbuttons:{
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
    
    dropdown: {
        selectDay: 'select[data-qa="days"]',
        selectMonth: 'select[data-qa="months"]',
        selectYear: 'select[data-qa="years"]',
        selectCountry: 'select[data-qa="country"]'
    },
    
    text:{
        asking: 'Enter Account Information'
    },

    validateSignupPage() {
        cy.contains(this.text.asking).should('be.visible');
    },

    startSignup(gender, password, day, month, year, firstName, lastName, company, address1, address2, country, state, city, zip, number) {
        if (gender === 'male') {
            cy.get(this.checkbuttons.genderMale).check();
        } else {
            cy.get(this.checkbuttons.genderFemale).check();
        }
        cy.get(this.field.insertPassword).type(password);
        cy.get(this.dropdown.selectDay).select(day);
        cy.get(this.dropdown.selectMonth).select(month);
        cy.get(this.dropdown.selectYear).select(year);
        cy.get(this.checkbuttons.newsletter).check();
        cy.get(this.checkbuttons.offers).check();
        cy.get(this.field.insertFirstName).type(firstName);
        cy.get(this.field.insertLastName).type(lastName);
        cy.get(this.field.insertCompany).type(company);
        cy.get(this.field.insertAddress1).type(address1);
        cy.get(this.field.insertAddress2).type(address2);
        cy.get(this.dropdown.selectCountry).select(country);
        cy.get(this.field.insertState).type(state);
        cy.get(this.field.insertCity).type(city);
        cy.get(this.field.insertZip).type(zip);
        cy.get(this.field.insertNumber).type(number);
    },

    finishSignup() {
        cy.get(this.button.signup).click();
    }
}