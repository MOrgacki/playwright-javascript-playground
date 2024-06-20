# Running Playwright Tests for Cypress World App

## Introduction

This repository contains automated tests for the Cypress World App. Below are instructions on how to run these automated tests using Cypress.

## Setup

1. **Install Dependencies**

   Make sure you have Node.js installed (minimum version 12) along with npm.

   ```bash
   npm install
   ```

2. **Start Cypress World App**

   You can start the Cypress World App using the npm script.

   ```bash
   npm run dev
   ```

   The application will be available at: [http://localhost:3000](http://localhost:3000).

3. **Create a Test User**

   Create a test user that will be used in the automated tests. Make sure you have the login credentials prepared.

4. **Configure .env File**

   Create a `.env` file in the project's root directory and configure the environment variables:

   ```dotenv
   NAME=testuser
   PASSWORD=testpassword
   WRONG_NAME=wronguser
   WRONG_PASSWORD=wrongpassword
   ```

   Replace `testuser`, `testpassword`, `wronguser`, and `wrongpassword` with your test user's actual credentials.

## Running Automated Tests

To run the automated tests using Playwright, follow these steps:

1. **Install Packages**

   ```bash
   npm install
   ```

2. **Run Tests**

   Run Playwright tests using npx:

   ```bash
   npx playwright tests
   ```
