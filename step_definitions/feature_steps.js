//constants:

const { I } = inject();
const faker = require('@faker-js/faker').faker;
const home_page = require('../pages/home_page');
const login_page = require('../pages/login_page');
const signup_page = require('../pages/signup_page');
const confirmation_page = require('../pages/confirmation_page');
const contact_page = require('../pages/contact_page');
const countries = [
  'India',
  'United States',
  'Canada',
  'Australia',
  'Israel',
  'New Zealand',
  'Singapore'
];

//Scenario variables
var email = faker.internet.email();
var password = faker.internet.password();
var username = faker.internet.username();
var gender = Math.random() < 0.5 ? 'male' : 'female';
var firstName = faker.person.firstName(gender);
var lastName = faker.person.lastName();
var day = String(Math.floor(Math.random() * 31) + 1);
var month = String(Math.floor(Math.random() * 12) + 1);
var year = String(Math.floor(Math.random() * (2021 - 1900 + 1)) + 1900);
var company = faker.company.name();
var address1 = faker.location.streetAddress(); 
var address2 = faker.location.city();
var country = countries[Math.floor(Math.random() * countries.length)];
var state = faker.location.state();
var city = faker.location.city();
var zip = faker.location.zipCode();
var number= faker.phone.number(); 
console.log(`The random credentials for the tests: \nUsername: ${username}\nEmail: ${email}\nPassword: ${password}\nGender: ${gender}\nName: ${firstName} ${lastName}\nBirth :${day}/${month}/${year}\nCompany: ${company}\nAddress: ${address1}, ${address2}, ${country}, ${state}, ${city}\nZip: ${zip}\nNumber: ${number}`)

//---------------------General Scenarios:--------------------

Given('I am on the homepage', () => {
  //Used by: register_user.feature | send_form.feature
  I.amOnPage('/');
  home_page.validateHomePage();
});

//-------------register_user.feature exclusive:-------------

When('I access the signup page', () => {
  home_page.gotoLogin();
});

When('I fill in all required registration fields', () => {
  login_page.validateLoginPage();
  login_page.startRegistering(username, email);
  login_page.finishRegistering();
  signup_page.validateSignup();
  signup_page.startSignup(gender, password, day, month, year, firstName, lastName, company, address1, address2, country, state, city, zip, number);
});

When('I submit the account creation form', () => {
  signup_page.finishSignup();
});

Then('I should see the message ACCOUNT CREATED!', () => {
  confirmation_page.validateCreated();
  confirmation_page.finishSignDel();
});

Then('I should be logged in as the new user', () => {
  home_page.validateHomePageLogged(username);
});

When('I delete my account', () => {
  home_page.deleteAccount();
});

Then('I should see the message ACCOUNT DELETED!', () => {
  confirmation_page.validateDeleted();
  confirmation_page.finishSignDel();
  home_page.validateHomePage();
});

//---------------send_form.feature exclusive:---------------

When('I access the contact us page', () => {
  home_page.gotoContact();
  contact_page.validateContactPage();
});

When('I fill in all required fields', () => {
  contact_page.fillContactFiels(firstName, lastName, email);
});

When('I submit the contact form', () => {
  contact_page.finishContact();
});

Then('I should see a sucess message', () => {
  contact_page.validateSent();
  contact_page.exitContact();
  home_page.validateHomePage();
});
