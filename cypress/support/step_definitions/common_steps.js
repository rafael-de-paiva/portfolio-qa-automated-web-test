/// <reference types="cypress" />

import { Before } from "@badeball/cypress-cucumber-preprocessor";
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import homePage from '../pages/home_page'
import loginPage from '../pages/login_page'
import gerarUsuario from '../data/dynamic_data.js'


Before(function () {
    const user = gerarUsuario();
    cy.wrap(user).as('user');
    cy.visit('/');
    cy.log('Usuário gerado:', JSON.stringify(user.lastName));
  });

Given ('I am on the homepage', function () {
    homePage.validateHomePage();
})

When ('I access the login or signup page', function () {
    homePage.gotoLoginPage();
    loginPage.validateLoginPage();
})