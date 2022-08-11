const { defineConfig } = require("cypress");

//For connecting to MySQL
const mysql = require('mysql2')
function queryTestDb(query, config) {
 const connection = mysql.createConnection(config.env)
 connection.connect()
 return new Promise((resolve, reject) => {
   connection.query(query, (error, results) => {
     if (error) reject(error)
     else {
       connection.end()
       return resolve(results)
     }
   })
 })
}

module.exports = defineConfig({
    chromeWebSecurity: true,
    defaultCommandTimeout: 20000,
    execTimeout: 60000,
    pageLoadTimeout: 600000,
    env: {
        host: "https://preprod.tiendamia.com.do",
        user: "tiendamia",
        password: "Fufesos+76",
        database: "tiendamia",
        insecureAuth : true
    },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { queryDb: query => { return queryTestDb(query, config) }, });
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions
      };
      on('file:preprocessor', cucumber(options));
    },
    baseUrl: 'https://preprod.tiendamia.com.do/',
    chromeWebSecurity: false,
    specPattern: 'cypress/integration/normal-script/*.{js,jsx,ts,tsx,feature}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 30000,
  },
});
