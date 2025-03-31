Feature: Send a Form
  In order to show my expertise on automated testing
  I want to test a full form and file attach scenario

  Scenario: Send a form Successfully
    Given I am on the homepage
    When I access the contact us page
    And I fill in all required fields
    And I submit the contact form
    Then I should see a sucess message