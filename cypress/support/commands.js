// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

let polyfill;

before(() => {
  const polyfillUrl = "https://unpkg.com/unfetch/dist/unfetch.umd.js";
  cy.request(polyfillUrl).then(response => {
    polyfill = response.body;
  });
});

Cypress.on("window:before:load", win => {
  delete win.fetch;
  // since the application code does not ship with a polyfill
  // load a polyfilled "fetch" from the test
  win.eval(polyfill);
  win.fetch = win.unfetch;
});

Cypress.on("uncaught:exception", (err, runnable) => {
  console.error(err);
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
