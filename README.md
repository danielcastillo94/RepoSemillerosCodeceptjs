# Liverpool E2E Automation

End-to-end test automation project for the Liverpool website using **CodeceptJS**, **Playwright**, **Gherkin** and **Allure Report**.

The project validates different customer flows such as product search, product detail information, stock and store availability, and customer reviews.

--- 
## Technologies

- Node.js
- Codeceptjs 4
- Playwright
- Gherkin
- Allure
- Javascript

---

## Project Structure 
```text
RepoSemillerosCodeceptjs/
│
├── features/
│   ├── search_product.feature
│   ├── product_detail.feature
│   ├── product_filters.feature
│   ├── product_stock.feature
│   └── product_reviews.feature
│
├── pages/
│   ├── filterPage.js
│   ├── searchPage.js
│   ├── resultsPage.js
│   ├── productDetailPage.js
│   ├── stockPage.js
│   └── reviewsPage.js
│
├── step_definitions/
│   ├── filterSteps.js
│   ├── searchSteps.js
│   ├── productDetailSteps.js
│   ├── stockSteps.js
│   └── reviewsSteps.js
│
├── utils/
│   └── playwrightVideoAllure_helper.js
│
├── output/
│   ├── allure-results/
│   ├── videos/
│   └── trace/
│
├── codecept.conf.js
├── package-lock.json
├── package.json
├── steps_file.js
└── README.md
```

## Automated Test Cases

### Product Search

| Test Case | Scenario | Status |
|-----------|----------|--------|
| TC-001 | Search for an existing product | Automated |
| TC-002 | Search for a non-existing product | Automated |
| TC-003 | Validate displayed search results | Automated |

### Product Filters

| Test Case | Scenario | Status |
|-----------|----------|--------|
| TC-008 | Filter products by a specific price range | Automated |
| TC-009 | Validate products inside the selected price range | Automated |
| TC-010 | Filter products by one brand | Automated |
| TC-011 | Filter products by multiple brands | Automated |
| TC-012 | Remove an active brand filter | Automated |
| TC-013 | Filter products by size | Automated |
| TC-014 | Filter products by color | Automated |
| TC-015 | Combine size and color filters | Automated |

### Product Detail

| Test Case | Scenario | Status |
|-----------|----------|--------|
| TC-020 | Open a product detail page | Automated |
| TC-021 | Validate product name, price and description | Automated |
| TC-022 | Validate product image gallery | Automated |

### Stock and Availability

| Test Case | Scenario | Status |
|-----------|----------|--------|
| TC-023 | Validate product availability options | Automated |
| TC-024 | View nearby stores with product availability | Automated |
| TC-025 | Validate product code | Automated |

### Product Reviews

| Test Case | Scenario | Status |
|-----------|----------|--------|
| TC-026 | View customer reviews | Automated |
| TC-027 | Validate five-star customer reviews | Automated |
| TC-028 | View photos attached to reviews | Not automated |

> **Note:** TC-027 was adapted because the current Liverpool product review interface does not expose an interactive filter by star rating. The automation validates that customer ratings are displayed and that at least one five-star review is available.
>
> TC-028 was not automated because review photos depend on user-generated content and are not consistently available for the selected products. Automating the scenario would make the test dependent on unstable external data.

---

## Prerequisites

Before running the project, make sure the following tools are installed:

- Node.js
- npm
- Git

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Enter the project directory:

```bash
cd RepoSemillerosCodeceptjs
```

Install the project dependencies:

```bash
npm install
```

Install the Chromium browser used by Playwright:

```bash
npx playwright install chromium
```

---

## Running the Tests

### Run the complete test suite

```bash
npm test
```

Equivalent command:

```bash
npx codeceptjs run --features
```

---

### Run tests showing every executed step

```bash
npm run test:steps
```

This command is useful for debugging because every CodeceptJS action is displayed in the terminal.

---

### Run a specific test case

Tests can be executed using their Gherkin tag.

Example:

```bash
npx codeceptjs run --features -g "@TC-020" --steps
```

Other example:

```bash
npx codeceptjs run --features -g "@TC-001"
```

---
## Allure Report

The project integrates **Allure Report** to provide detailed execution evidence.

Each automated test can include:

- Test execution steps
- Final screenshot
- Playwright video
- Playwright trace
- Execution duration
- Passed/failed status
- Error information for failed tests

Allure results are generated in:

```text
output/allure-results/
```

To open the report:

```bash
npm run report
```
---

## Author

**Hermes Alberto Delgado Díaz**  
QA Automation Exercise - CodeceptJS + Playwright

---

## AI Assistance

Artificial Intelligence tools were used as a support resource during the development of this project.

AI assistance was mainly used for:

- Reviewing and correcting code implementations.
- Suggesting improvements and alternative approaches.
- Identifying possible causes of errors during test execution.
- Supporting the design and organization of some automated scenarios.
- Assisting with the implementation of the custom `playwrightVideoAllure_helper.js` helper used to attach Playwright screenshots, traces and video evidence to Allure reports.
- Improving project documentation and code readability.

All generated suggestions and code were reviewed, adapted and tested before being included in the project. The final implementation decisions, test execution and validation were performed by the project author.