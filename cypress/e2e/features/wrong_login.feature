Feature: Wrong Login
   As a clumsy customer
   I want to recieve a fail feedback on a failed login attempt
   So i can try again

  Scenario: Login with wrong Credentials
    Given I am on the homepage
    When I access the login or signup page
    And I submit wrong email and password
    Then I should see a fail message