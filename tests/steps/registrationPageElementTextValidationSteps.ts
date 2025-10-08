import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, Then } = createBdd(test);

Given('I navigate to registration page {string}', async ({ registrationPage }, url) => {
  await registrationPage.navigateToRegistrationPage(url);
});

Then('I should see the label text {string} for the first name field', async ({ registrationPage }, expectedFirstNameLabel: string) => {
  const actualFirstNameLabelText = await registrationPage.getFirstNameLabel();
  registrationPage.verifyLabelText(actualFirstNameLabelText, expectedFirstNameLabel);
});

Then('I should see the label text {string} for the last name field', async ({ registrationPage }, expectedLastNameLabel: string) => {
  const actualLastNameLabelText = await registrationPage.getLastNameLabel();
  registrationPage.verifyLabelText(actualLastNameLabelText, expectedLastNameLabel);
});

Then('I should see the help text {string} for the last name field', async ({ registrationPage }, expectedLastNameHelpText: string) => {
  const actualLastNameHelpText = await registrationPage.getLastNameHelpText();
  registrationPage.verifyHelpText(actualLastNameHelpText, expectedLastNameHelpText);
});

Then('I should see the label text {string} for the phone number field', async ({ registrationPage }, expectedPhoneNumberLabel: string) => {
  const actualPhoneNumberLabelText = await registrationPage.getPhoneNumberLabel();
  registrationPage.verifyLabelText(actualPhoneNumberLabelText, expectedPhoneNumberLabel);
});

Then('I should see the help text {string} for the phone number field', async ({ registrationPage }, expectedPhoneNumberHelpText: string) => {
  const actualPhoneNumberHelpText = await registrationPage.getPhoneNumberHelpText();
  registrationPage.verifyHelpText(actualPhoneNumberHelpText, expectedPhoneNumberHelpText);
});

Then('I should see the label text {string} for the country dropdown', async ({ registrationPage }, expectedCountryDropdownLabel: string) => {
  const actualCountryDropdownLabelText = await registrationPage.getCountryDropdownLabel();
  registrationPage.verifyLabelText(actualCountryDropdownLabelText, expectedCountryDropdownLabel);
});

Then('I should see the label text {string} for the email address field', async ({ registrationPage }, expectedEmailAddressLabel: string) => {
  const actualEmailAddressLabelText = await registrationPage.getEmailAddressLabel();
  registrationPage.verifyLabelText(actualEmailAddressLabelText, expectedEmailAddressLabel);
});

Then('I should see the label text {string} for the password field', async ({ registrationPage }, expectedPasswordLabel: string) => {
  const actualPasswordLabelText = await registrationPage.getPasswordLabel();
  registrationPage.verifyLabelText(actualPasswordLabelText, expectedPasswordLabel);
});

Then('I should see the help text {string} for the password field', async ({ registrationPage }, expectedPasswordHelpText: string) => {
  const actualPasswordHelpText = await registrationPage.getPasswordHelpText();
  registrationPage.verifyHelpText(actualPasswordHelpText, expectedPasswordHelpText);
});

Then('I should see the label text {string} for the terms and conditions checkbox', async ({ registrationPage }, expectedTermsAndConditionsCheckboxText: string) => {
  const actualTermsAndConditionsCheckboxLabelText = await registrationPage.getTermsAndConditionsCheckboxText();
  registrationPage.verifyLabelText(actualTermsAndConditionsCheckboxLabelText, expectedTermsAndConditionsCheckboxText);
});

Then('I should see the label text {string} for the register button', async ({ registrationPage }, expectedRegisterButtonLabel: string) => {
  const actualRegisterButtonLabelText = await registrationPage.getRegisterButtonLabelText();
  registrationPage.verifyLabelText(actualRegisterButtonLabelText, expectedRegisterButtonLabel);
});