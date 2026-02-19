const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com'/*https://the-internet.herokuapp.com*/,
    reporter: 'mocha-junit-reporter',
    reporterOptions: {mochaFile: 'cypress/results/results-[hash].xml'},
    setupNodeEvents(on, config) {
      // Aktivácia pluginu
      addXrayResultUpload(on, config);
      return config;
    },
    env: {
      xray: {
        // Tu zadáš údaje, ktoré dostaneš z Jiry
        projectKey: "TVOJ_PROJEKT_KEY", 
        uploadResults: true,
        cloud: {
          clientId: "TVOJE_CLIENT_ID",
          clientSecret: "TVOJ_CLIENT_SECRET"
        }
      }
    }
}})
const { defineConfig } = require("cypress");
const { addXrayResultUpload } = require("cypress-xray-plugin/plugin"); // Pridaj toto

module.exports = defineConfig({
  e2e: {
    
  }
});
