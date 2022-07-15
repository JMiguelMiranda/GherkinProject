const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,
    execTimeout: 60000,
    pageLoadTimeout: 600000,
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions
      };
      on('file:preprocessor', cucumber(options));
    },
    baseUrl: 'https://staging-automation-mgn2-a.tiendamia.net/',
    chromeWebSecurity: false,
    specPattern: 'cypress/integration/normal-script/*.{js,jsx,ts,tsx,feature}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 30000
  },
});
