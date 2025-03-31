exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.automationexercise.com',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    home_pagePage: "./pages/home_page.js",
    login_pagePage: "./pages/login_page.js",
    signup_pagePage: "./pages/signup_page.js",
    confirmation_pagePage: "./pages/confirmation_page.js",
    contact_pagePage: "./pages/contact_page.js",
    product_pagePage: "./pages/product_page.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/feature_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Teste-Qa-BDD_Codecept_Playwright'
}