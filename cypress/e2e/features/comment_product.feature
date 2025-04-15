Feature: Comment Product
  As a recent customer
  I want to comment a product
  To give a feedback to the website

  Scenario: Comment Product Successfully
    Given I am on the homepage
    When I access the product page
    And I search of specific product
    Then I should see the corresponding product list
    When I view a product
    And I make a comment
    Then i should see the feedback "Thank you for your review."