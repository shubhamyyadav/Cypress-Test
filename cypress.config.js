const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "d7yevq",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
