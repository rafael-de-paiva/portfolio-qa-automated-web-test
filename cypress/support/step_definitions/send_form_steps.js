/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import homePage from '../pages/home_page'
import contactPage from '../pages/contact_page'

Then ('I access the contact us page', function () {
    homePage.gotoContactPage();
    contactPage.validateContactPage();
})

When ('I fill in all required fields', function () {
    const user = this.user;
    contactPage.fillContactForm(user.firstName, user.lastName, user.email);
})

When ('I submit the contact form', function () {
    contactPage.finishContactForm();
})

Then ('I should see {string}', function (message) {
    contactPage.validateSent(message);
    contactPage.exitContactPage();
    homePage.validateHomePage();
})