/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import homePage from '../pages/home_page'
import productPage from '../pages/product_page'

When ('I access the product page', function () {
    homePage.gotoProductPage();
    productPage.validateProductPage();
})

When ('I search of specific product', function () {
    productPage.startSearch();
})

Then ('I should see the corresponding product list', function () {
    productPage.confirmSearch();
})

When ('I view a product', function () {
    productPage.confirmProduct();
})  

When ('I make a comment', function () {
    const user = this.user;
    productPage.startReview(user.firstName, user.lastName, user.email);
})

Then ('i should see the feedback {string}', function (message) {
    productPage.confirmReview(message);
})