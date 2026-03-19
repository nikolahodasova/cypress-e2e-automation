# 🌌 Cypress E2E Automation Framework

![Cypress Tests](https://img.shields.io/badge/cypress-testing-brightgreen)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![Pattern](https://img.shields.io/badge/pattern-Page%20Object%20Model-orange)

## 🎯 Project Overview
This project features an **End-to-End (E2E) Automation Framework** built for the "Automation Exercise" web application. The primary goal was to develop a scalable, maintainable, and professional testing suite following industry-standard QA practices and design patterns.

## 🛠 Tech Stack
*   **Framework:** Cypress
*   **Language:** JavaScript
*   **Locators:** CSS Selectors, XPath
*   **Architecture:** Page Object Model (POM)

## ✨ Key Features
*   **Page Object Model (POM):** Decoupled test logic from UI elements for better maintainability.
*   **Locators Strategy:** Priority on `data-qa` attributes, using **XPath** and **CSS** where necessary.
*   **Negative Testing:** Comprehensive validation of error messages and incorrect login states.
*   **Data-Driven Testing:** Utilizing **Cypress Fixtures** (`user.json`) for external data management.
*   **API Testing:** Integrated basic API checks within the Cypress environment.
*   **Custom Utilities:** Global configuration and reusable methods in the `support` folder.


## 📁 Folder Architecture
```text
cypress/
  ├── e2e/
  │   ├── api.cy.js             # API verification tests
  │   ├── login.cy.js           # Positive login & logout flow
  │   └── negative-login.cy.js  # Error handling & validation tests
  ├── fixtures
  │   └── user.json             # User Data (email, password, name)
  ├── page-objects/
  │   └── LoginPage.js          # Selectors and methods for Login page
  ├── support/
  │   ├── command.js            # Custom Cyoress comands (for future)
  │   └── e2e.js                # Global configuration & import
  ├── .gitignore                # Files excluded from Git (node_modules, etc.)
  ├── cypress.config.js         # Main Cypress configuration
  ├── package.json              # Project metadata & scripts
  ├── package-lock.json         # Locked versions of dependencies
  └── README.md                 # Project documentation

```

## 👩🏻‍💻 Author
**Nikola Hodásová** QA Test Engineer (Junior), QA Automation Tester (Junior)

