const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts:false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    //Baseurl
    baseUrl : "https://www.saucedemo.com",
    chromeWebSecurity:false
  },
  retries:{
    //tries agian on failure while run
    runMode:1,
    //tries again in gui 
    openMode:1
    
  }
});
