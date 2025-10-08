import { Page, Locator, expect } from '@playwright/test';

class RegistrationPage {
  readonly page: Page;
  readonly firstNameLabel: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameLabel: Locator;
  readonly lastNameInput: Locator;
  readonly lastNameHelpText: Locator;
  readonly phoneNumberLabel: Locator;
  readonly phoneNumberInput: Locator;
  readonly phoneNumberHelpText: Locator;
  readonly countryDropdownLabel: Locator;
  readonly countryDropdown: Locator;
  readonly emailAddressLabel: Locator;
  readonly emailAddressInput: Locator;
  readonly passwordLabel: Locator;
  readonly passwordInput: Locator;
  readonly passwordHelpText: Locator;
  readonly termsAndConditionsCheckbox: Locator;
  readonly termsAndConditionsCheckboxText: Locator;
  readonly registerButton: Locator;
  readonly message: Locator;
  readonly resultFirstName: Locator;
  readonly resultLastName: Locator;
  readonly resultPhoneNumber: Locator;
  readonly resultCountry: Locator;
  readonly resultEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameLabel = page.locator('//input[@id = "firstName"]/preceding-sibling::label')
    this.firstNameInput = page.locator('#firstName');
    this.lastNameLabel = page.locator('//input[@id = "lastName"]/preceding-sibling::label')
    this.lastNameInput = page.locator('#lastName');
    this.lastNameHelpText = page.locator('#lnHelp');
    this.phoneNumberLabel = page.locator('//input[@id = "phone"]/preceding-sibling::label')
    this.phoneNumberInput = page.locator('#phone');
    this.phoneNumberHelpText = page.locator('#phoneHelp');
    this.countryDropdownLabel = page.locator('//select[@id = "countries_dropdown_menu"]/preceding-sibling::label')
    this.countryDropdown = page.locator('#countries_dropdown_menu');
    this.emailAddressLabel = page.locator('//input[@id = "emailAddress"]/preceding-sibling::label')
    this.emailAddressInput = page.locator('#emailAddress');
    this.passwordLabel = page.locator('//input[@id = "password"]/preceding-sibling::label')
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

  async navigateToRegistrationPage(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getFirstNameLabel(): Promise<string> {
    const firstNameLabelText = await this.firstNameLabel.textContent();
    return firstNameLabelText?.trim() || '';
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
  }

  async getLastNameLabel(): Promise<string> {
    const lastNameLabelText = await this.lastNameLabel.textContent();
    return lastNameLabelText?.trim() || '';
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.lastNameInput.fill(lastName);
  }

  async getLastNameHelpText(): Promise<string> {
    const lastNameHelpText = await this.lastNameHelpText.textContent();
    return lastNameHelpText?.trim() || '';
  }

  async getPhoneNumberLabel(): Promise<string> {
    const phoneNumberLabelText = await this.phoneNumberLabel.textContent();
    return phoneNumberLabelText?.trim() || '';
  }

  async enterPhoneNumber(phoneNumber: string): Promise<void> {
    await this.phoneNumberInput.fill(phoneNumber);
  }

  async getPhoneNumberHelpText(): Promise<string> {
    const phoneNumberHelpText = await this.phoneNumberHelpText.textContent();
    return phoneNumberHelpText?.trim() || '';
  }

  async getCountryDropdownLabel(): Promise<string> {
    const countryDropdownLabelText = await this.countryDropdownLabel.textContent();
    return countryDropdownLabelText?.trim() || '';
  }

  async selectCountry(countryName: string): Promise<void> {
    await this.countryDropdown.selectOption({ label: countryName });
  }

  async getEmailAddressLabel(): Promise<string> {
    const emailAddressLabelText = await this.emailAddressLabel.textContent();
    return emailAddressLabelText?.trim() || '';
  }

  async enterEmailAddress(emailAddress: string): Promise<void> {
    await this.emailAddressInput.fill(emailAddress);
  }

  async getPasswordLabel(): Promise<string> {
    const passwordLabelText = await this.passwordLabel.textContent();
    return passwordLabelText?.trim() || '';
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async getPasswordHelpText(): Promise<string> {
    const passwordHelpText = await this.passwordHelpText.textContent();
    return passwordHelpText?.trim() || '';
  }

  async acceptTermsAndConditions() {
    await this.termsAndConditionsCheckbox.check();
  }

  async getTermsAndConditionsCheckboxText(): Promise<string> {
    const termsAndConditionsCheckboxText = await this.termsAndConditionsCheckboxText.textContent();
    return termsAndConditionsCheckboxText?.trim() || '';
  }

  async getRegisterButtonLabelText(): Promise<string> {
    const registerButtonLabelText = await this.registerButton.textContent();
    return registerButtonLabelText?.trim() || '';
  }

  async clickRegister() {
    await this.registerButton.click();
  }

  async getMessageText(): Promise<string> {
    const messageText = await this.message.textContent();
    return messageText?.trim() || '';
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

  async verifySuccessMessage(successMessage: string) {
    await expect.soft(this.message).toHaveText(successMessage);
  }

  async verifyErrorMessage(errorMessage: string) {
    await expect.soft(this.message).toHaveText(errorMessage);
  }

  async verifyLabelText(labelText: string, expectedLabelText: string) {
    expect.soft(labelText).toBe(expectedLabelText);
  }

  async verifyHelpText(helpText: string, expectedHelpText: string) {
    expect.soft(helpText).toBe(expectedHelpText);
  }
}

export { RegistrationPage };