# QA Automation Portfolio - Web Project (CodeceptJS + Playwright + BDD)

This project is part of my QA portfolio and aims to demonstrate my skills in end-to-end test automation for web applications, using **CodeceptJS** integrated with **Playwright** and **BDD (Behavior-Driven Development)** style with **Gherkin**.

---

## 🚀 Technologies and Tools Used

- **CodeceptJS** - End-to-end testing framework
- **Playwright** - Browser automation tool
- **BDD with Gherkin** - For describing scenarios in natural language
- **Faker.js** - For generating dynamic test data
- **Node.js / NPM** - Execution environment and package manager

---

## 📄 Project Structure

```
project-root/
├── pages/                   # PageObjects organized by feature
│   ├── home_page.js
│   ├── login_page.js
│   ├── signup_page.js
│   ├── contact_page.js
│   └── confirmation_page.js
│
├── features/                # Scenarios written in Gherkin (BDD)
│   ├── register_user.feature
│   └── send_form.feature
│
├── step_definitions/        # Implementation of Gherkin steps
│   └── feature_steps.js
│
├── file_sample.txt          # File used for upload test
├── codecept.conf.js         # CodeceptJS configuration
├── package.json             # Scripts and dependencies
├── README.md                # This file :)
└── ...
```

---

## 🧪 Test Cases Implemented

### 1. User Registration (register_user.feature)
- Fills in all required fields
- Uses dynamically generated data
- Validates redirect and success messages

### 2. Contact Form Submission (send_form.feature)
- Fills in contact form fields
- Performs **file upload**
- Validates success feedback

### 3. (Planned) Product Comment
- Planned test for searching a product and submitting a comment

---

## ⚙️ How to Run This Project

### 1. Clone the repository
```bash
git clone <repo-link>
cd project-folder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the tests

- **All scenarios**
```bash
npm run test:all
```

- **Specific scenario**
```bash
npm run test:register         # Run user registration scenario
npm run test:sendform         # Run contact form scenario
```

---

## ✍️ Technical Notes

- BDD with Gherkin is used **primarily for organization and readable documentation**.
- Some reporting tools (like Mochawesome) don’t support Gherkin steps, so I prioritized **code clarity and modular PageObjects**.
- Faker is used to dynamically generate test data and avoid reusing static or existing data.

---

## 🛠️ Future Improvements (Backlog)
- Implement product comment test
- Include negative tests (e.g., invalid login)
- Enhance README with execution screenshots or gifs

---

## 🙏 Thanks for Visiting
Thank you for checking out my project! Feel free to reach out:

- Email: [rafael123paiva@gmail.com]
- LinkedIn: [linkedin.com/in/rafael-paiva-49b88430a]

---

With care and attention to detail,  
**Rafael** 🐉