const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com'/*https://the-internet.herokuapp.com*/
  }
})