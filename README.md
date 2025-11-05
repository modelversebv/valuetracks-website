# ValueTracks Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2F425E?style=for-the-badge&logo=playwright&logoColor=white)

![Status](https://img.shields.io/badge/Status-Stable%20Release-green)

The official static website for ValueTracks linking to the Modelverse cybersecurity platform, built with modern web technologies for performance and maintainability.

This repository hosts the front-end source code for the ValueTracks website. As a static site built with **React** and **TypeScript**, its design prioritizes security, speed, and ease of deployment, serving as the main information hub for our platform.

## Table of Contents

- [ValueTracks Website](#valuetracks-website)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running Locally](#running-locally)
  - [Testing](#testing)
    - [Running Tests](#running-tests)
    - [Viewing Test Results](#viewing-test-results)
    - [Creating New Tests](#creating-new-tests)
  - [Build \& Deployment](#build--deployment)
    - [1. Building the project](#1-building-the-project)
    - [2. Locally Previewing the Build](#2-locally-previewing-the-build)
    - [3. Locally deploying to Firebase (NOT Recommended)](#3-locally-deploying-to-firebase-not-recommended)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Contact](#contact)

## Technologies Used

This project is a static website built with a modern frontend stack designed for performance, security, and maintainability.

The core technologies are:

- **Frontend Framework:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Testing:** [Playwright](https://playwright.dev/)
- **Package Manager:** **npm**
- **Build Tool:** **Vite**

## Getting Started

Follow these step-by-step instructions to get a copy of the **ValueTracks Website** up and running on your local machine for development, testing, or review.

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- **Git**
- **Node.js:** v.22.x (lts)
- **npm:** (comes bundled with Node.js)

### Installation

1. **Clone the repository**
   Open your terminal or command prompt and run the following command to download the source code:

   ```bash
   git clone -b dev git@github.com:modelversebv/valuetracks-website.git
   ```

2. **Navigate into the project directory**
   Change into the newly created folder:

   ```bash
   cd valuetracks-website
   ```

3. **Install dependencies**
   Install all required packages listed in `package.json`:

   ```bash
   npm install
   ```

4. **Install dev Dependencies** (TODO)

### Running Locally

After successful installation, you can start the development server:

1. **Start the development server**

   Run the command to compile the code and serve the application locally:

   ```bash
   npm run dev
   ```

2. **View the application**

   Open your web browser and navigate to:

   ```bash
   http://localhost:5173
   ```

   The website should now be running locally.

## Testing

The **ValueTracks Website** uses **Playwright** for testing to ensure application stability and proper functionality.

### Running Tests

Open a **terminal window** in the project's root directory and run the following command to install the browsers required for testing:

```bash
npx playwright install-deps
```

To execute all tests run the following command:

```bash
npx playwright test
```

The playwright config file already has the **webServer** option enabled so you **do not** need to run the server locally prior to running the tests.

### Viewing Test Results

After the tests are complete, you can review the detailed, interactive report in your web browser by running the following command:

```bash
npx playwright show-report
```

### Creating New Tests

New test files should follow the project conventions to ensure consistency and maintainability.

**Text Structure and Location:**

- **File Location:** All Playwright test files must be placed within the `tests/` directory at the root of the project.
- **File Naming:** Test files should be named using the format `[feature-name].test.ts` (e.g., `navigation.spec.ts` or `contact-form.spec.ts`).

**Example Test File:**

```typescript
// tests/app.test.ts
import { expect, test } from '@playwright/test'

test('hello world', async ({ page }) => {
  await page.goto('')

  // 1. Check if website title is "ValueTracks".
  await expect(page).toHaveTitle('ValueTracks')

  // 2. Check if the root element has any children.
  const rootHasChildren = await page
    .locator('#root')
    .evaluate((root) => root.children.length > 0)
  expect(rootHasChildren).toBe(true)
})
```

## Build & Deployment

The ValueTracks website is a static, client-side application built using **Vite** and **Rollup**. The application needs to be compiled into static assets before being deployed to a web server.

### 1\. Building the project

To generate the optimized static files, run the standard build script:

```bash
npm run build
```

This command performs the following actions:

1. It executes the Vite/Rollup bundler.
2. It bundles, transpiles, and optimizes all React, TypeScript, and CSS assets.
3. It outputs the final, minified static files (HTML, CSS, JS, etc.) into the **`dist/`** directory.

The contents of the **`dist/`** folder are the files that should be hosted on a web server.

### 2\. Locally Previewing the Build

To test the generated production build exactly as it will appear live, you can use the built-in preview command:

```bash
npm run preview
```

This command will:

1. Start a minimal local web server.
2. Serve the optimized files directly from the **`dist/`** folder.
3. The console will provide a local URL (e.g., `http://localhost:4173`) to view the production site in your browser.

### 3\. Locally deploying to Firebase (NOT Recommended)

- Install the **Firebase CLI** globally on your machine if not already installed:

  ```bash
  npm install -g firebase-tools
  ```

- Log into your Firebase account via the CLI:

  ```bash
  firebase login
  ```

- To deploy first **build** the application and then run the command:

  ```bash
  firebase deploy
  ```

## Contributing

Please see [**CONTRIBUTING.md**](./CONTRIBUTING.md) for detailed instructions on setting up your environment, branching strategy, and code standards

## Credits

Initial development and implementation by [Matei Avram](https://github.com/mateiAvram)

## Contact

For questions or support, reach out to the maintainers:

- Daan Loyens - [daan@modelverse.online](mailto:daan@modelverse.online)
- Matei Avram - [matei@modelverse.online](mailto:matei@modelverse.online)
