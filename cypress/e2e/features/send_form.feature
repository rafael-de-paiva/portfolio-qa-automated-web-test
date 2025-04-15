Feature: Send a Form
    As a customer
    I want send a form
    In order to solve a problem
    
    Scenario: Send a form Successfully
        Given I am on the homepage
        Then I access the contact us page
        And I fill in all required fields
        And I submit the contact form
        Then I should see "Success! Your details have been submitted successfully."