Feature: Test Spot The Bugs Challenge page

    @successfulRegistrationProcess
    Scenario: Verify user is able to fill in the form using valid credentials
        Given I navigate to "https://qa-practice.netlify.app/bugs-form"
        When I enter valid First Name "abc", Last Name "xyz", and Phone Number "1234567890"
        And I select "New Zealand" from the "Country" dropdown
        And I enter valid Email "abc.xyz@gmail.com" and Password "Abc@1234"
        And I click the "Register" button
        Then I should see the success message "Successfully registered the following information"

    @unsuccessfulRegistrationProcess
    Scenario Outline: Verify user is not able to register using invalid credentials
        Given I navigate to "https://qa-practice.netlify.app/bugs-form"
        When I enter valid First Name "<firstname>", Last Name "<lastname>", and Phone Number "<phonenumber>"
        And I enter valid Email "<email>" and Password "<password>"
        And I click the "Register" button
        Then I should see an error message "<errorMessage>"
    Examples:
        | firstname | lastname | phonenumber | email               | password                | errorMessage                                             |
        |           |          |             |                     |                         | The password should contain between [6,20] characters!   |
        |           |          |             |                     | Abc                     | The password should contain between [6,20] characters!   |
        |           |          |             |                     | Abcdefghijkl@1234567890 | The password should contain between [6,20] characters!   |
        |           |          |             |                     | Abc@1234                | The phone number should contain at least 10 characters!  |
        |           |          | 1234567     |                     | Abc@1234                | The phone number should contain at least 10 characters!  |
        | 123       | xyz      | 1234567890  | abc.xyz@test.com    | Abc@1234                | The first name can only contain letters!                 |
        | @#$       | xyz      | 1234567890  | abc.xyz@test.com    | Abc@1234                | The first name can only contain letters!                 |
        | abc       | 456      | 1234567890  | abc.xyz@test.com    | Abc@1234                | The last name can only contain letters!                  |
        | abc       | @#$      | 1234567890  | abc.xyz@test.com    | Abc@1234                | The last name can only contain letters!                  |
        | abc       |          | 1234567890  | abc.xyz@test.com    | Abc@1234                | The last name cannot be a empty!                         |
        | abc       | xyz      |             | abc.xyz@test.com    | Abc@1234                | The phone number cannot be a empty!                      |
        | abc       | xyz      | Abcdefghij  | abc.xyz@test.com    | Abc@1234                | The phone number can only contain numbers!               |
        | abc       | xyz      | 1234567890  | abc.xyz             | Abc@1234                | The email address is not valid!                          |
        | abc       | xyz      | 1234567890  |                     | Abc@1234                | The email address cannot be empty!                       |

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