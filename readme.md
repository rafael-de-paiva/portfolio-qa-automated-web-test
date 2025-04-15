# QA Automation Portfolio - Web Project (Cypress + Cucumber + BDD)

 This project is a updated version from a [old project](https://github.com/rafael-de-paiva/old-qa-automated-web-test).

 This one is part of my QA portfolio and aims to demonstrate my skills in end-to-end test automation for web applications, using **Cypress** integrated with **Cucumber (BDD)** and **Gherkin**.

Tested website: [https://www.automationexercise.com](https://www.automationexercise.com)

---

## 🚀 Technologies and Tools Used

- **Cypress** - End-to-end testing framework
- **Cucumber + Gherkin** - For Behavior-Driven Development (BDD) style scenarios
- **Faker.js** - For generating dynamic test data
- **Node.js / NPM** - Runtime and dependency manager
- **GitHub Actions** - CI pipeline to run tests on every push

---

## 📄 Project Structure

```
project-root/
├── .github/workflows/          # GitHub Actions CI pipeline
│   └── cypress-pipeline.yml
│
├── cypress/
│   ├── e2e/
│   │   └── features/           # Gherkin feature files (BDD scenarios)
│   │       ├── comment_product.feature
│   │       ├── register_user.feature
│   │       ├── send_form.feature
│   │       └── wrong_login.feature
│   │
│   ├── fixtures/               # Sample file for upload test
│   │   └── file_sample.txt
│   │
│   └── support/
│       ├── data/
│       │   └── dynamic_data.js     # Dynamic user data generation using Faker
│       │
│       ├── pages/                  # PageObjects for element mappings
│       │   ├── home_page.js
│       │   ├── login_page.js
│       │   ├── signup_page.js
│       │   ├── contact_page.js
│       │   ├── product_page.js
│       │   └── confirmation_page.js
│       │
│       ├── step_definitions/       # Gherkin step implementations
│       │   ├── comment_product_steps.js
│       │   ├── common_steps.js
│       │   ├── register_user_steps.js
│       │   ├── send_form_steps.js
│       │   └── wrong_login_steps.js
│       │
│       ├── commands.js             # Custom Cypress commands
│       └── e2e.js                  # Global setup (including error suppression)
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md (you are here)
```

---

## 🧪 Test Cases Implemented

### 1. User Registration (`register_user.feature`)
- Fills all required fields using **dynamically generated data**
- Validates successful registration

### 2. Contact Form Submission (`send_form.feature`)
- Fills in the contact form fields
- Performs **file upload**
- Validates success confirmation

### 3. Product Comment (`comment_product.feature`)
- Navigates to a product page
- Submits a product comment
- Validates confirmation message

### 4. Wrong Login Attempt (`wrong_login.feature`)
- Attempts to log in with incorrect credentials
- Validates **error feedback** is properly displayed

---

## ⚙️ How to Run This Project

### 1. Clone the repository
```bash
cd your-project-folder-path
git clone https://github.com/rafael-de-paiva/portfolio-qa-automated-web-test.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the tests

- **Run all scenarios**
```bash
npx cypress run
```
or
```bash
npm run test:all
```

- **Run in interactive mode (UI)**
```bash
npx cypress open
```
Step 1: Open E2E Testing
Step 2: Choose a browser
Step 3: Choose a scenario

- **Target specific feature file**
```bash
npx cypress run --spec "cypress/e2e/features/register_user.feature"    # Run user registration scenario
npx cypress run --spec "cypress/e2e/features/send_form.feature"        # Run contact form scenario
npx cypress run --spec "cypress/e2e/features/comment_product.feature"  # Run comment product form scenario
npx cypress run --spec "cypress/e2e/features/wrong_login.feature"      # Run wrong login form scenario

```
or
```bash
npm run test:register         # Run user registration scenario
npm run test:sendform         # Run contact form scenario
npm run test:comment          # Run comment product form scenario
npm run test:wronglogin       # Run wrong login form scenario
```

---

## 🚀 Continuous Integration with GitHub Actions

Tests are automatically executed on push or pull request to the `main` branch using a pipeline defined in:
```bash
.github/workflows/cypress-pipeline.yml
```
- Runs on Ubuntu via GitHub-hosted runners
- Executes all BDD scenarios
- Can be extended to include video/screenshots uploads, reports, or Cypress Cloud integration

---

## ✍️ Technical Notes

- **Cypress + Cucumber** offers clean separation between behavior (Gherkin) and implementation (step definitions)
- All test data is dynamically generated using **Faker.js**
- Element selectors are organized by PageObjects for maintainability
- Upload and wait-handling are included in the flows (e.g. `cy.wait`, dynamic selectors, etc)

## 🙏 Thanks for Visiting
Thank you for checking out my project! Feel free to reach out:

- Email: **rafael123paiva@gmail.com**
- LinkedIn: [https://www.linkedin.com/in/rafael-paiva-49b88430a](https://www.linkedin.com/in/rafael-paiva-49b88430a)

---

With care and attention to detail,  
**Rafael** 🐉

