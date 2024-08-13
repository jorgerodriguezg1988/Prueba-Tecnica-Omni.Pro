const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } =require('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
    },
    baseUrl: "https://www.bestbuy.ca/en-ca/",
    chromeWebSecurity: false,
    testIsolation: false,
    // viewportHeight: 900,
    // viewportWidth: 1500,
    defaultCommandTimeout: 5000,
    //retries: 2,
  },
});
