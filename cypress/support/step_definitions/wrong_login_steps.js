/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import homePage from '../pages/home_page'
import loginPage from '../pages/login_page'

When ('I submit wrong email and password', function () {
    const user = this.user;
    loginPage.startLogin(user.email, user.password);
})

Then ('I should see a fail message', function () {
    loginPage.confirmLoginFail();
})