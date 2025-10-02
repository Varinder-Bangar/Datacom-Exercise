import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ registrationPage }, url) => {
  await registrationPage.navigateToRegistrationPage(url);
});

When('I enter valid First Name {string}, Last Name {string}, and Phone Number {string}', async ({ registrationPage }, firstName, lastName, phoneNumber) => {
  await registrationPage.enterFirstName(firstName);
  await registrationPage.enterLastName(lastName);
  await registrationPage.enterPhoneNumber(phoneNumber);
});

When('I select {string} from the {string} dropdown', async ({ registrationPage }, countryName, countryDropdown) => {
  await registrationPage.selectCountry(countryName);
});

When('I enter valid Email {string} and Password {string}', async ({ registrationPage }, email, password) => {
  await registrationPage.enterEmailAddress(email);
  await registrationPage.enterPassword(password);
});

When('I click the {string} button', async ({ registrationPage }, buttonName) => {
  await registrationPage.clickRegister();
});

Then('I should see the success message {string}', async ({ registrationPage }, successMessage) => {
  await registrationPage.verifySuccessMessage(successMessage);
});

Then('I should see an error message {string}', async ({ registrationPage }, errorMessage) => {
  await registrationPage.verifyErrorMessage(errorMessage);
});