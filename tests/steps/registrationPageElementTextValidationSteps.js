import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, Then } = createBdd(test);

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