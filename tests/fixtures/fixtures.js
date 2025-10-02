import { test as base } from 'playwright-bdd';
import { RegistrationPage } from "../pages/registrationPageObj";

export const test = base.extend({
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  }
});