import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // The used website seems to have a error that makes it try to acess google maps api, failing to acess this api
    // makes the test fail as well so this part makes the test ignore it
    if (err.message.includes('Google Maps API is required')) {
      return false;
    }
  });