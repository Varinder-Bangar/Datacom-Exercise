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

Given('I navigate to registration page {string}', async ({ registrationPage }, url) => {
  await registrationPage.navigateToRegistrationPage(url);
});

Then('I should see the label text {string} for the first name field', async ({ registrationPage }, firstNameLabel) => {
  await registrationPage.verifyLabelText(registrationPage.firstNameLabel, firstNameLabel);
});

Then('I should see the label text {string} for the last name field', async ({ registrationPage }, lastNameLabel) => {
  await registrationPage.verifyLabelText(registrationPage.lastNameLabel, lastNameLabel);
});

Then('I should see the help text {string} for the last name field', async ({ registrationPage }, lastNameHelpText) => {
  await registrationPage.verifyHelpText(registrationPage.lastNameHelpText, lastNameHelpText);
});

Then('I should see the label text {string} for the phone number field', async ({ registrationPage }, phoneNumberLabel) => {
  await registrationPage.verifyLabelText(registrationPage.phoneNumberLabel, phoneNumberLabel);
});

Then('I should see the help text {string} for the phone number field', async ({ registrationPage }, phoneNumberHelpText) => {
  await registrationPage.verifyHelpText(registrationPage.phoneNumberHelpText, phoneNumberHelpText);
});

Then('I should see the label text {string} for the country dropdown', async ({ registrationPage }, countryDropdownLabel) => {
  await registrationPage.verifyLabelText(registrationPage.countryDropdownLabel, countryDropdownLabel);
});

Then('I should see the label text {string} for the email address field', async ({ registrationPage }, emailAddressLabel) => {
  await registrationPage.verifyLabelText(registrationPage.emailAddressLabel, emailAddressLabel);
});

Then('I should see the label text {string} for the password field', async ({ registrationPage }, passwordLabel) => {
  await registrationPage.verifyLabelText(registrationPage.passwordLabel, passwordLabel);
});

Then('I should see the help text {string} for the password field', async ({ registrationPage }, passwordHelpText) => {
  await registrationPage.verifyHelpText(registrationPage.passwordHelpText, passwordHelpText);
});

Then('I should see the label text {string} for the terms and conditions checkbox', async ({ registrationPage }, termsAndConditionsCheckboxText) => {
  await registrationPage.verifyLabelText(registrationPage.termsAndConditionsCheckboxText, termsAndConditionsCheckboxText);
});

Then('I should see the label text {string} for the register button', async ({ registrationPage }, registerButtonLabel) => {
  await registrationPage.verifyLabelText(registrationPage.registerButton, registerButtonLabel);
});