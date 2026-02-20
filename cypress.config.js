const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com'/*https://the-internet.herokuapp.com*/,
    reporter: 'mocha-junit-reporter',
    reporterOptions: {mochaFile: 'cypress/results/results-[hash].xml'},
    setupNodeEvents(on, config) {
      return config;
    }
}})