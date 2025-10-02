Feature: Verify Registration Page Label Texts and Help Texts

    As a user
    I want to verify that all label texts and help texts are displayed correctly on the registration page
    So that I can ensure a better user experience and clarity while filling out the registration form
    @labelVerification
    Scenario: Verify all label texts are displayed correctly on the registration page
        Given I navigate to registration page "https://qa-practice.netlify.app/bugs-form"
        Then I should see the label text "First Name" for the first name field
        And I should see the label text "Last Name*" for the last name field
        And I should see the help text "Note: All the fields marked with * are mandatory" for the last name field
        And I should see the label text "Phone Number*" for the phone number field
        And I should see the help text "Phone Number length validation: between 10-15 digits" for the phone number field
        And I should see the label text "Country" for the country dropdown
        And I should see the label text "Email Address*" for the email address field
        And I should see the label text "Password*" for the password field
        And I should see the help text "Password length validation: between [6,20] characters" for the password field
        And I should see the label text "I agree to the terms and conditions" for the terms and conditions checkbox
        And I should see the label text "Register" for the register button