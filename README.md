# React, TypeScript, Webpack, Babel Boilerplate

This project is using [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/).

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test:unit` to execute the unit tests via [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/).

## Running end-to-end tests

Run `npm run test:e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## CI/CD

CI/CD is already set up using Github actions.
Whenever the master branch is changed, it will be deployed automatically.

## UI Framework or Library

It is using Emotion for UI library by default by you can change it easily.
All configs are already set for Emotion.

## Code Formatting

This uses Prettier as a code formatter and please run `npm run format` to run prettier.