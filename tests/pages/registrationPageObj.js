import { expect } from '@playwright/test';

class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.firstNameLabel = page.locator('//input[@id = "firstName"]/preceding-sibling::label')
    this.firstNameInput = page.locator('#firstName');
    this.lastNameLabel = page.locator('//input[@id = "lastName"]/preceding-sibling::label')
    this.lastNameInput = page.locator('#lastName');
    this.lastNameHelpText = page.locator('#lnHelp');
    this.phoneNumberLabel = page.locator('//input[@id = "phone"]/preceding-sibling::label')
    this.phoneNumberInput = page.locator('#phone');
    this.phoneNumberHelpText = page.locator('#phoneHelp');
    this.countryDropdown = page.locator('#countries_dropdown_menu');
    this.emailAddressLabel = page.locator('//input[@id = "emailAddress"]/preceding-sibling::label')
    this.emailAddressInput = page.locator('#emailAddress');
    this.passwordInput = page.locator('#password');
    this.passwordHelpText = page.locator('#pwHelp');
    this.termsAndConditionsCheckbox = page.locator('#exampleCheck1');
    this.termsAndConditionsCheckboxText = page.locator('//input[@id = "exampleCheck1"]/following-sibling::label')
    this.registerButton = page.locator('#registerBtn');
    this.message = page.locator('#message');
    this.resultFirstName = page.locator('#resultFn');
    this.resultLastName = page.locator('#resultLn');
    this.resultPhoneNumber = page.locator('#resultPhone');
    this.resultCountry = page.locator('#country');
    this.resultEmail = page.locator('#resultEmail');
  }

  async navigateToRegistrationPage(url) {
    await this.page.goto(url);
  }

  async getFirstNameLabel() {
    return this.firstNameLabel.textContent();
  }

  async enterFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }

  async getLastNameLabel() {
    return this.lastNameLabel.textContent();
  }

  async enterLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }

  async getLastNameHelpText() {
    return this.lastNameHelpText.textContent();
  }

  async getPhoneNumberLabel() {
    return this.phoneNumberLabel.textContent();
  }

  async enterPhoneNumber(phoneNumber) {
    await this.phoneNumberInput.fill(phoneNumber);
  }

  async getPhoneNumberHelpText() {
    return this.phoneNumberHelpText.textContent();
  }

  async getCountryDropdownLabel() {
    return this.countryDropdownLabel.textContent();
  }

  async selectCountry(countryName) {
    await this.countryDropdown.selectOption({ label: countryName });
  }

  async getEmailAddressLabel() {
    return this.emailAddressLabel.textContent();
  }

  async enterEmailAddress(emailAddress) {
    await this.emailAddressInput.fill(emailAddress);
  }

  async getPasswordLabel() {
    return this.passwordLabel.textContent();
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async getPasswordHelpText() {
    return this.passwordHelpText.textContent();
  }

  async acceptTermsAndConditions() {
    await this.termsAndConditionsCheckbox.check();
  }

  async getTermsAndConditionsCheckboxText() {
    return this.termsAndConditionsCheckboxText.textContent();
  }

  async getRegisterButtonLabel() {
    return this.registerButton.textContent();
  }

  async clickRegister() {
    await this.registerButton.click();
  }

  async getMessageText() {
    return this.message.textContent();
  }

  async getResultDetails() {
    return {
      firstName: await this.resultFirstName.textContent(),
      lastName: await this.resultLastName.textContent(),
      phoneNumber: await this.resultPhoneNumber.textContent(),
      country: await this.resultCountry.textContent(),
      email: await this.resultEmail.textContent(),
    };
  }

  async verifySuccessMessage(successMessage) {
    await expect(this.message).toHaveText(successMessage);
  }

  async verifyErrorMessage(errorMessage) {
    await expect(this.message).toHaveText(errorMessage);
  }

  async verifyLabelText(labelLocator, expectedLabelText) {
    const actualLabelText = await labelLocator.textContent();
    expect(actualLabelText).toBe(expectedLabelText);
  }

  async verifyHelpText(helpTextLocator, expectedHelpText) {
    const actualHelpText = await helpTextLocator.textContent();
    expect(actualHelpText).toBe(expectedHelpText);
  }
}

export { RegistrationPage };