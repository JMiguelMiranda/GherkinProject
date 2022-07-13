const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions
      };
      on('file:preprocessor', cucumber(options));
    },
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    specPattern: 'cypress/integration/normal-script/*.{js,jsx,ts,tsx,feature}'
  },
});
