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
    const labelText = await registrationPage.getFirstNameLabel();
    expect(labelText).toBe(firstNameLabel);
});

Then('I should see the label text {string} for the last name field', async ({ registrationPage }, lastNameLabel) => {
  const labelText = await registrationPage.getLastNameLabel();
  expect(labelText).toBe(lastNameLabel);
});

Then('I should see the help text {string} for the last name field', async ({ registrationPage }, lastNameHelpText) => {
  const actualHelpText = await registrationPage.getLastNameHelpText();
  expect(actualHelpText).toBe(lastNameHelpText);
});

Then('I should see the label text {string} for the phone number field', async ({ registrationPage }, phoneNumberLabel) => {
  const labelText = await registrationPage.getPhoneNumberLabel();
  expect(labelText).toBe(phoneNumberLabel);
});

Then('I should see the help text {string} for the phone number field', async ({ registrationPage }, phoneNumberHelpText) => {
  const actualHelpText = await registrationPage.getPhoneNumberHelpText();
  expect(actualHelpText).toBe(phoneNumberHelpText);
});

Then('I should see the label text {string} for the country dropdown', async ({ registrationPage }, countryDropdownLabel) => {
  const labelText = await registrationPage.getCountryDropdownLabel();
  expect(labelText).toBe(countryDropdownLabel);
});

Then('I should see the label text {string} for the email address field', async ({ registrationPage }, emailAddressLabel) => {
  const labelText = await registrationPage.getEmailAddressLabel();
  expect(labelText).toBe(emailAddressLabel);
});

Then('I should see the label text {string} for the password field', async ({ registrationPage }, passwordLabel) => {
  const labelText = await registrationPage.getPasswordLabel();
  expect(labelText).toBe(passwordLabel);
});

Then('I should see the help text {string} for the password field', async ({ registrationPage }, passwordHelpText) => {
  const actualHelpText = await registrationPage.getPasswordHelpText();
  expect(actualHelpText).toBe(passwordHelpText);
});

Then('I should see the label text {string} for the terms and conditions checkbox', async ({ registrationPage }, termsAndConditionsCheckboxText) => {
  const labelText = await registrationPage.getTermsAndConditionsCheckboxText();
  expect(labelText).toBe(termsAndConditionsCheckboxText);
});

Then('I should see the label text {string} for the register button', async ({ registrationPage }, registerButtonLabel) => {
  const labelText = await registrationPage.getRegisterButtonLabel();
  expect(labelText).toBe(registerButtonLabel);
});