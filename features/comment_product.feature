Feature: Comment Product
  In order to show my expertise on automated testing
  I want to test a full comment product scenario

  Scenario: Comment Product Successfully
    Given I am on the homepage
    When I access the product page
    And I search of specific product
    Then I should see the corresponding product list
    When I view a product
    And I make a comment
    Then i should see the message Thank you for your review.