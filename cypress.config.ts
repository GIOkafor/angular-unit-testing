import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'http://localhost:51495/',
    baseUrl: 'http://localhost:4200/',
  },
});
