Feature: Register/Delete User
  In order to show my expertise on automated testing
  I want to test a full registering scenario

  Scenario: Register/Delete User Successfully
    Given I am on the homepage
    When I access the signup page
    And I fill in all required registration fields
    And I submit the account creation form
    Then I should see the message ACCOUNT CREATED!
    And I should be logged in as the new user
    When I delete my account
    Then I should see the message ACCOUNT DELETED!