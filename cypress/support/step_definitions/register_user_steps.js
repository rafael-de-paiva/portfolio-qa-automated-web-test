/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import homePage from '../pages/home_page'
import loginPage from '../pages/login_page'  
import signupPage from '../pages/signup_page'
import confirmationPage from '../pages/confirmation_page'

var deleted = false;

When ('I fill in all required registration fields', function () {
    const user = this.user;
    loginPage.startRegistering(user.username, user.email);
    loginPage.finishRegistering();
    signupPage.validateSignupPage();
    signupPage.startSignup(user.gender, user.password, user.day, user.month, user.year, user.firstName, user.lastName, user.company, user.address1, user.address2, user.country, user.state, user.city, user.zip, user.number);
})

When ('I submit the account creation form', function () {
    signupPage.finishSignup();
})

Then ('I should see the message {string}', function (message) {
    confirmationPage.validateConfirmationPage(message);
    confirmationPage.finishConfirmation();
    if (deleted) {
        homePage.validateHomePage();
    }
})

When ('I should be logged in as the new user', function () {
    homePage.validateHomePageLoggedIn();
})

When ('I delete my account', function () {
    homePage.deleteAccount();
    deleted = true;
})
