Feature: Register/Delete User
    As a new customer
    I want to throught a full account register process
    So i can make purchases on the website

    Scenario: Register/Delete User Successfully
        Given I am on the homepage
        When I access the login or signup page
        And I fill in all required registration fields
        And I submit the account creation form
        Then I should see the message "Account Created!"
        And I should be logged in as the new user
        When I delete my account
        Then I should see the message "Account Deleted!"