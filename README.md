# Next.js Project Setup

This repository contains a Next.js project configured to run with Node.js version 18 and managed with Yarn as the package manager. Below are the instructions to set up and run the project, as well as guidelines to run tests using Jest.

## Prerequisites

Before setting up the project, make sure you have the following installed on your machine:

- **Node.js (v18)**
- **Yarn**

You can verify your Node.js and Yarn versions using the following commands:

```bash
node -v
yarn -v
```

If you do not have the correct version of Node.js, consider using a version manager like nvm to install and manage multiple versions of Node.js:

```bash
nvm install 18
nvm use 18
```

If Yarn is not installed, you can install it globally using npm:

```bash
npm install -g yarn
```

## Setup and Installation

1. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
yarn install
```

2. Run the Development Server

Start the development server with:

```bash
yarn dev
```

This will start the Next.js application on http://localhost:3000.

## Running Tests with Jest

This project uses Jest for running tests. Follow these steps to execute tests:

1. Run Tests

Execute the tests by running:

```bash
yarn test
```

This command will run Jest and execute all tests files found in the project.

2. View Test Results

After running the tests, Jest will provide a report on the terminal indicating which tests passed and which failed, along with any errors or warnings.
