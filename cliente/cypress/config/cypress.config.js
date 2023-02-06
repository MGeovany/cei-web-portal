module.exports = {
  // The rest of the Cypress config options go here...
  projectId: 'ms5kye',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      BASE_URL: 'http://localhost:3000/'
    }
  }
}
