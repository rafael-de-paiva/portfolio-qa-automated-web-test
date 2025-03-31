Feature: Wrong Login
  In order to show my expertise on automated testing
  I want to test a full failed Login scenario

  Scenario: Login with wrong Credentials
    Given I am on the homepage
    When I access the login page
    And I submit wrong email and password
    Then I should see a fail message